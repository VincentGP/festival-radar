<template>
  <div>
    <div>
      <h1>Thomas super flotte styleguide</h1>
    </div>

    <h2>Atoms</h2>
    <div class="atoms">
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

export default {
  components: {
    'fr-button': Button
  }
}
</script>

<style lang="scss" scoped>
  .row {
    width: 100%;
    margin: 30px 0;
  }
</style>


