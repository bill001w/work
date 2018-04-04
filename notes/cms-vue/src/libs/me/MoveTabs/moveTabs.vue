<template>
  <main class="page-main">
    <jTabs :tabInfo="tabInfo" :currentTab="currentTab"></jTabs>
    <div id="J_iframe">
      <iframe frameborder="0" style="width:100%;height:100%;min-width:0;"
              v-for="item in tabInfo"
              :src="item.href"
              :style="{display: item.id === currentTab ? 'block' : 'none'}"></iframe>
    </div>
  </main>
</template>

<script>
  import {mapGetters} from 'vuex';
  import jTabs from './jTabs';

  export default {
    name: 'moveTabs',
    components: {jTabs},
    computed: {
      ...mapGetters(['currentTab', 'tabInfo']),
    },
  }
</script>

<style scoped lang="scss">
  $height: 42px;

  #J_iframe {
    position: absolute;
    top: $height;
    left: 0;
    right: 0;
    bottom: 0;
  }

  #J_loading {
    padding: 30px;
  }
</style>