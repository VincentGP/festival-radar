<template>
  <div>
    <fr-header-section 
      :title="'Artists'"
      :bottom-text="'By following artists we are able to find the most fitting music festivals for your needs'">
    </fr-header-section>
    
  </div>
</template>

<script>
import HeaderSection from '../components/organisms/HeaderSection';

export default {
  components: {
    'fr-header-section': HeaderSection,
  }
};
</script>
