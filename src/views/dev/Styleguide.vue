<template>
  <div>
    <div>
      <h1>Thomas super flotte styleguide</h1>
    </div>

    <h2>Atoms</h2>
    <h3>Buttons</h3>
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
      <label>Label - 10px - Roboto</label>
    </div>
    <div class="row">
      <label>Label-uppercase - 10px - Roboto</label>
    </div>
    <div class="row">
      <div>Label-uppercase-big - 12px - Roboto regular</div>
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


