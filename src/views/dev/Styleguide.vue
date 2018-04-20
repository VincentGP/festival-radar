<template>
  <div class="container">
    <div>
      <h1>Thomas super flotte styleguide</h1>
    </div>

    <h2>Atoms</h2>
    <div class="box">
      <h3>Colors</h3>
      <div class="row">
        <div class="row__box row__box--black"></div>
        <label class="label">$color-black</label>
        <div class="row__box row__box--dark-grey"></div>
        <label class="label">$color-dark-grey</label>
        <div class="row__box row__box--light-grey"></div>
        <label class="label">$color-light-grey</label>
      </div>
      <div class="row">
        <div class="row__box row__box--lighter-grey"></div>
        <label class="label">$color-lighter-grey</label>
        <div class="row__box row__box--white"></div>
        <label class="label">$color-white</label>
        <div class="row__box row__box--sand"></div>
        <label class="label">$color-sand</label>
      </div>
      <div class="row">
        <div class="row__box row__box--light-sand"></div>
        <label class="label">$color-light-sand</label>
        <div class="row__box row__box--green"></div>
        <label class="label">$color-green</label>
        <div class="row__box row__box--blue"></div>
        <label class="label">$color-blue</label>
      </div>
      <div class="row">
        <div class="row__box row__box--background"></div>
        <label class="label">$color-background</label>
        <div class="row__box row__box--lightish-grey"></div>
        <label class="label">$color-lightish-grey</label>
      </div>
    </div>

    <div class="box">
      <h3>Fonts</h3>
      <div class="row">
        <h1>H1 - 60px - Bauhaus 93</h1>
      </div>
      <div class="row">
        <h2>H2 - 36px - Bauhaus 93</h2>
      </div>
      <div class="row">
        <h3>H3 - 22px - Bauhaus 93</h3>
      </div>
      <div class="row">
        <h4>H4 - 24px - Roboto regular</h4>
      </div>
      <div class="row">
        <p>Paragraph - 16px - Roboto regular</p>
      </div>
      <div class="row">
        <a>Anchor - 16px - Roboto bold</a>
      </div>
      <div class="row">
        <label class="label">Label - 10px - Roboto</label>
      </div>
      <div class="row">
        <label class="label label--uppercase">Label--uppercase - 10px - Roboto</label>
      </div>
      <div class="row">
        <div class="label label--uppercase label--big">Label--uppercase label--big - 12px - Roboto regular</div>
      </div>
    </div>

    <div class="atoms box">
      <h3>Buttons</h3>
      <div class="row">
        <fr-button>
          Klik her
        </fr-button>
      </div>
      <div class="row">
        <fr-button class="btn--gray">
          Klik her
        </fr-button>
      </div>
      <div class="row">
        <fr-button class="btn--small">
          Klik her
        </fr-button>
      </div>
      <div class="row">
        <fr-button class="btn--small btn--gray">
          Klik her
        </fr-button>
      </div>
      <div class="row">
        <fr-button :icon="'chevron-right'">
          Klik her
        </fr-button>
      </div>
      <div class="row">
        <fr-button class="btn--no-style" :icon="'arrow-right'">
          Klik her
        </fr-button>
      </div>
    </div>

    <div class="box">
      <h3>Inputs</h3>
      <div class="row">
        <input class="inp" type="text" placeholder="Please enter your input">
      </div>
      <div class="row">
        <input class="inp inp--rounded" type="text" placeholder="Please enter your input">
      </div>
    </div>

    <div class="box">
      <h3>Toggles</h3>
    </div>
    <div class="box">
      <h3>Tags</h3>
    </div>
    <div class="box box__white">
      <h3>placeholders</h3>
      <div class="row">
        <fr-user-placeholder></fr-user-placeholder>
        <fr-user-placeholder :src="profileImagePath"></fr-user-placeholder>
      </div>
    </div>

    <div class="molecules">
      <h2>Molecules</h2>
    </div>
    <div class="organisms">
      <h2>Organisms</h2>
    </div>
    <div class="templates">
      <h2>Templates</h2>
    </div>
  </div>
</template>

<script>
import Button from '../../components/atoms/Button.vue';
import UserPlaceholder from '../../components/atoms/UserPlaceholder.vue';

export default {
  components: {
    'fr-button': Button,
    'fr-user-placeholder': UserPlaceholder
  },
  computed: {
    profileImagePath() {
      return `http://localhost:7777/uploads/${this.$store.state.user.imagePath}`;
    }
  }
};
</script>

<style lang="scss" scoped>
  .box {
    background: #F7F8F9;
    border: 1px solid #e3e3e3;
    padding: 40px;
    margin-bottom: 30px;

    &__white {
      background: white;
    }
  }

  .row {
    width: 100%;
    margin: 30px 0;
    display: flex;
    flex-wrap: wrap;

    &__box {
      width: 60px;
      height: 60px;
      border: 1px solid #e3e3e3;
      margin: 0 10px 10px 30px;

      &--black {
        background: #383838;
      }

      &--dark-grey {
        background: #666666;
      }

      &--light-grey {
        background: #9EA0A3;
      }

      &--lighter-grey {
        background: #F7F8F9;
      }

      &--white {
        background: #FFFFFF;
      }

      &--sand {
        background: #E3E2CE;
      }

      &--light-sand {
        background: #EDE7D1;
      }

      &--green {
        background: #D2D8C9;
      }

      &--blue {
        background: #93B6B7;
      }

      &--background {
        background: #f4f4f4;
      }

      &--lightish-grey {
        background: #D8D8D8;
      }
    }
  }
</style>
