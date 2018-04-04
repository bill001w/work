<template>
  <MoveTabs></MoveTabs>
</template>
<script>
  import MoveTabs from '@/libs/me/MoveTabs/moveTabs';

  export default {
    name: 'Index',
    components: {MoveTabs},
  }
</script>

<style lang="scss" scoped>
  @import "./index";

  .page-main {
    position: absolute;
    top: 0;
    bottom: 0;
    left: $sidebar-width;
    right: 0;
    overflow: auto;
    color: $body-color;
    background-color: $body-background;
    transition: left 0.3s ease-in;

    @at-root {
      .full-page & {
        left: 0;
      }
    }
  }
</style>