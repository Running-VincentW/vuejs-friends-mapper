<template>
  <div id="app">
    <Header />
    <div class="container"><router-view/></div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
export default {
  name: "app",
  components:{
    Header
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>
