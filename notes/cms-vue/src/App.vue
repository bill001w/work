<template>
  <div id="app">
    <MainSidebar v-if="$router.currentRoute.name==='Index'"></MainSidebar>
    <router-view/>
  </div>
</template>

<script>
  import MainSidebar from '@/components/index/sidebar';

  export default {
    name: 'App',
    components: {MainSidebar},
  }
</script>

<style>
  html, body {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 100%;
  }
</style>
