// Eksterne imports
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

// Interne imports
import router from '../router';

// Fortæl Vue at vi bruger Vuex til state management
Vue.use(Vuex);

// Vi eksporterer store for at få adgang til den andre steder vi vi skal bruge den
export const store = new Vuex.Store({
  state: {
    authToken: null,
    userId: null,
    user: null,
    festivals: []
  },
  getters: {
    // Check om brugeren er valid (return true hvis token ikke er null)
    isAuthenticated(state) {
      return state.authToken !== null;
    }
  },
  // Mutations kan ikke køre asykron kode
  mutations: {
    // Sætter egentlig bare variabler
    authUser(state, userData) {
      state.authToken = userData.authToken;
      state.userId = userData.userId;
      state.user = userData.user;
    },
    // Fjerner variabler fra state og localStorage
    clearAuthData(state) {
      state.authToken = null;
      state.userId = null;
      state.user = null;
      localStorage.removeItem('expirationDate');
      localStorage.removeItem('userId');
      localStorage.removeItem('authToken');
    },
    // Blocker klienten
    blockClient() {
      // Sæt blocked til at være true når brugeren skal blokeres
      localStorage.setItem('blocked', true);
      let tenMinutesFromNow = new Date();
      tenMinutesFromNow.setMinutes(tenMinutesFromNow.getMinutes() + 10);
      localStorage.setItem('blockedExpiresIn', tenMinutesFromNow);
    },
    // Unblock klienten
    unblockClient() {
      localStorage.removeItem('attempts');
      localStorage.removeItem('blocked');
      localStorage.removeItem('blockedExpiresIn');
    },
    festivals(state, festivals) {
      state.festivals = festivals;
    }
  },
  // Actions kan sagtens køre asykron kode i modsætning til mutations
  actions: {
    signup({ dispatch }, userData) {
      return new Promise((resolve, reject) => {
        // Lav form object baseret på data fra signup form
        const formData = new FormData();
        formData.append('firstName', userData.firstName);
        formData.append('lastName', userData.lastName);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        // Billede filen
        formData.append('avatar', userData.avatar, userData.avatar.name);
        // Lav request til serveren
        axios.post('/users', formData)
          .then((res) => {
            router.push({ path: '/login' });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    },
    // Vi bruger commit objektet for at kunne comitte en mutation
    // authData kommer fra formen i frontenden
    login({ commit, dispatch }, authData) {
      return new Promise((resolve, reject) => {
        // Først og fremmest checkes der om brugeren er blokeret på klienten
        if (localStorage.getItem('blocked')) {
          // Hent udløbsdato (lav om til Date objekt) og sammenlign med nuværende tidspunkt
          let expirationDate = localStorage.getItem('blockedExpiresIn');
          expirationDate = Date.parse(expirationDate);
          let now = new Date();
          if (now > expirationDate) {
            commit('unblockClient');
          } else {
            return reject(new Error('blocked'));
          }
        }
        // Spørg vores backend om vi må logge ind (send email og password med)
        axios.post('/users/login', { email: authData.email, password: authData.password })
          .then((res) => {
            // Hvis vi får et ok tilbage fra serveren
            if (res.status === 200) {
              // Aktivér vores mutation og send id og token med
              commit('authUser', {
                userId: res.data.user._id,
                authToken: res.data.user.authToken,
                user: {
                  firstName: res.data.user.firstName,
                  lastName: res.data.user.lastName,
                  email: res.data.user.email,
                  imagePath: res.data.user.imagePath,
                  followedArtists: res.data.user.followedArtists,
                  followedFestivals: res.data.user.followedFestivals,
                  followedGenres: res.data.user.followedGenres
                }
              });
              // Find den nuværende tid og dato
              let now = new Date();
              // Find frem til udløbsdatoen på session baseret på dagens dato og tid vi får tilbage fra server
              let expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000);
              // Gem data vi skal bruge til auto login på klienten
              localStorage.setItem('authToken', res.data.user.authToken);
              localStorage.setItem('userId', res.data.user._id);
              localStorage.setItem('expirationDate', expirationDate);
              // Sæt anden action i gang som sætter log ud timeren i gang
              dispatch('setLogoutTimer', res.data.expiresIn);
              // Nulstil antaller af login forsøg
              commit('unblockClient', res.data.expiresIn);
              // Resolve promise og redirect til forsiden
              resolve();
              router.push({ path: '/' });
            }
          })
          // Hvis der gik noget galt med svaret fra serveren
          .catch(() => {
            // Hent nuværende forsøg (hvis der er nogle)
            let attempts = localStorage.getItem('attempts');
            // Hvis der ikke er nogle forsøg endnu
            if (!attempts) {
              localStorage.setItem('attempts', 1);
            }
            // Inkrementer hvis der allerede er forsøg
            if (attempts <= 2) {
              // Lav om til tal og inkrementer
              let amount = Number(attempts) + 1;
              localStorage.setItem('attempts', amount);
            } else {
              // Så bliver brugeren blokeret
              commit('blockClient');
            }
            reject(new Error());
          });
      });
    },
    // Action til at logge bruger ud
    logout({ commit }) {
      // Tag token fra localStorage da den nødvendigvis ikke er på state når der er gået en time
      let authToken = localStorage.getItem('authToken');
      // Kald herefter vores log ud route på APIen og send token med
      axios.delete('/users', {
        headers: {
          'x-auth': authToken
        }
      })
        .then((res) => {
          // Fjern data fra vores state og fra localStorage
          commit('clearAuthData');
          // Navigér til login siden
          router.replace('/login');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // Action til at sætte log ud timeren
    setLogoutTimer({ dispatch }, expirationTime) {
      // Sæt logout action i gang når tiden er udløbet
      setTimeout(() => {
        dispatch('logout');
      }, expirationTime * 1000);
    },
    tryAutoLogin({ commit, dispatch }) {
      // Hent token og userId fra localStorage
      let authToken = localStorage.getItem('authToken');
      let userId = localStorage.getItem('userId');
      // Stop funktion hvis der ikke er nogen token
      if (!authToken) {
        return;
      }
      // Valider token på serveren
      axios.get('/users/validate', {
        headers: {
          'x-auth': authToken
        }
      })
        .then((res) => {
          // Hent udløbsdato (lav om til Date objekt) og sammenlign med nuværende tidspunkt
          let expirationDate = localStorage.getItem('expirationDate');
          expirationDate = Date.parse(expirationDate);
          let now = new Date();
          if (now >= expirationDate) {
            dispatch('logout');
            return;
          }
          commit('authUser', {
            authToken,
            userId,
            user: {
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              email: res.data.email,
              imagePath: res.data.imagePath,
              followedArtists: res.data.followedArtists,
              followedFestivals: res.data.followedFestivals,
              followedGenres: res.data.followedGenres
            }
          });
        })
        .catch(() => {
          // Hvis token ikke er valid
          commit('clearAuthData');
          router.push({ path: '/login' });
        });
    },
    getAllFestivals({ commit }) {
      axios.get('/festivals')
        .then((res) => {
          // Aktivér vores mutation og send data med
          commit('festivals', res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }
});
