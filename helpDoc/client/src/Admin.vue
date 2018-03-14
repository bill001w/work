<template lang="html">
  <div>
    <div class="main">
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus">
* {
  box-sizing: border-box;
  text-decoration: none;
}

html body {
  width: 100%;
  height: 100%;
}

.grey-scroll::-webkit-scrollbar {
  width: 6px;
}

.grey-scroll::-webkit-scrollbar-track {
  background-color: #fff;
}

/* 滚动条的滑轨背景颜色 */
.grey-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(151, 168, 190, 0.3);
  border-radius: 5px;
}

/* 滑块颜色 */
.grey-scroll::-webkit-scrollbar-thumb:hover {
  background-color: rgba(151, 168, 190, 0.5);
  border-radius: 5px;
}

/* 滑块颜色 */
</style>
