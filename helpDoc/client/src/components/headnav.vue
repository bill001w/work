<template>
  <div>
    <div class="menu">
      <ul>
        <li class="menu-item float-left">
          <a href="https://ba.dui.ai/">返回 交互式企业名片系统</a>
        </li>
        <li class="menu-item float-right" v-if="token()">
          <a @click.stop.prevent="loginout">退出</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    token() {
      console.log(localStorage.getItem("token"), 1)
      return localStorage.getItem("token");
    },
    logout() {
      window.localStorage.removeItem("token");
      this.$router.push("/ct_skill");
    }
  }
};
</script>

<style lang="stylus" scoped>
.float-left {
  display: block;
  float: left;
}

.float-right {
  display: block;
  float: right;
}

.menu {
  margin-right: 20px;
}

.menu ul {
  margin: 0;
}

.menu .menu-item {
  margin: 0 20px;
  font-size: 16px;
}

.menu .menu-item:hover a {
  color: #0098fb;
}

.menu .menu-item a {
  display: inline-block;
  padding: 0 10px;
  height: 56px;
  line-height: 56px;
  color: #959595;
}

.menu .menu-item a.active {
  color: #1F2D3D;
  border-bottom: 3px solid #0098fb;
}
</style>
