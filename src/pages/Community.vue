<template>
  <div class="community fade-in">
    <section class="community-content">
      <h1>Community Page</h1>
    </section>

    <Footer />
  </div>
</template>
  
<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Community',
  components: {
    Footer
  }
}
</script>
  
<style scoped>

h1 {
  text-align: center;
}

</style>

