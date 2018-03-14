<template lang="html">
  <div>
    <div class="menu">
      <ul>
        <li class="menu-item float-left">
          <a href="/" id="duilink">首页</a>
        </li>
        <li class="menu-item float-left">
          <a href="https://ba.dui.ai/" id="duilink">返回 交互式企业名片系统</a>
        </li>
      </ul>
    </div>
    <template v-if="$store.state.route.path.indexOf('/editor/') === -1">  
      <div class="menu-r float-right" v-if="user === 103100">
        <button class="btn-signin" @click="regist">注册</button>
        <button class="btn-login" onclick="window.location = '/console/index.html'">登录</button>
      </div>
      <div class="menu-r float-right" v-if="user.email">
        <button class="btn-console" onclick="window.location = '/console/index.html'">控制台</button>
        <button class="btn-user float-right" id="btn-user" @mouseover="hover"  @mouseleave="leave" @click="goAccount">
          <div class="flex">
            <span style="position: relative;top: 10px;">
              <svg class="icon icon-user-head" aria-hidden="true">
                <use xlink:href="#icon-morentouxiang"></use>
              </svg>
            </span>
            <span class="btn-user-text">{{user.nickName}}</span>
          </div>
        </button>
        <div class="clearfix"></div>
      </div>
    </template>  
    <div class="dui-popover dui-popover-user" v-show="popoverUserShow" @mouseover="hover"  @mouseleave="leave">
      <div class="dui-popover-content card-user flex">
        <svg class="icon icon-user-head" aria-hidden="true">
          <use xlink:href="#icon-morentouxiang"></use>
        </svg>
        <div class="float-right" style=" max-width: 200px;">
          <p class="company-info">{{company.abbreviation}}</p>
          <p class="user-info">{{user.email || user.mobile}}</p>
        </div>
      </div>
      <div class="dui-popover-footer flex">
        <button class="dui-btn-text" onclick="window.location = '/console/account.html'">
          <svg class="icon icon-shezhi" aria-hidden="true">
            <use xlink:href="#icon-shezhi"></use>
          </svg>设置
        </button>
        <button class="dui-btn-text btn-logout" @click="loginout">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
import track from "../util/track";

export default {
  created() {
    // this.$http.get('/console/user/info').then((response) => {
    //   if (response.body.errId === 0) {
    //     this.user = response.body.userdata
    //     window.uid = response.body.userdata.userId
    //   } else if (response.body.errId === '103100') {
    //     this.user = 103100
    //   }
    //   track({ userId: window.uid || 0, toPath: location.href, fromPath: document.referrer })
    // })
    // this.$http.get('/console/api/v1.0/company/info').then((response) => {
    //   if (response.body.errId === 0) {
    //     this.company = response.body.result
    //   }
    // })
  },
  data() {
    return {
      user: {},
      company: {},
      popoverUserShow: false,
      settimeinter: {},
      height: 0,
      height2: 0
    };
  },
  methods: {
    regist() {
      var baseUrl = window.location.origin || window.location.origin.host;
      var signinUrl = "https://account.dui.ai/#/regist";
      if (baseUrl.indexOf("test") > -1) {
        signinUrl = "https://account.t.dui.ai/#/regist";
      } else if (baseUrl.indexOf("dev") > -1) {
        signinUrl = "https://account.dev.dui.ai/#/regist";
      } else if (baseUrl.indexOf("beta") > -1) {
        signinUrl = "https://account.beta.dui.ai/#/regist";
      }
      window.location = signinUrl;
    },
    hover() {
      clearTimeout(this.settimeinter);
      this.popoverUserShow = true;
    },
    leave() {
      this.settimeinter = setTimeout(() => {
        this.popoverUserShow = false;
      }, 500);
    },
    loginout() {
      sessionStorage.removeItem("qa");
      window.location = "/console/logout";
      window.localStorage.removeItem("newestMsgTime");
      window.localStorage.removeItem("newestMsgIdList");
    },
    refreshgo(href) {
      location.href = "/docs/index.html?" + +new Date() + href;
    },
    goAccount() {
      location.href = "/console/account.html";
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

.logo {
  margin-right: 30px;
  padding-top: 8px;
  height: 56px;
}

.logo .icon-logo {
  width: 90px;
  height: 40px;
}

.logo .icon-beta {
  width: 25px;
  height: 24px;
  top: -23px;
  position: relative;
}

button {
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  background-color: #fff;
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

.menu-r {
  height: 56px;
  line-height: 56px;
}

.menu-r button {
  margin-left: 15px;
  width: 80px;
  height: 30px;
  line-height: 30px;
  color: #0098fb;
  border: 1px solid #0098fb;
}

.menu-r button:hover {
  color: #fff;
  background-color: #0098fb;
}

.menu-r .btn-signin {
  color: #fff;
  background-color: #0098fb;
  border-color: #0098fb;
}

.menu-r .btn-user {
  padding-left: 15px;
  width: auto;
  height: 56px;
  line-height: 56px;
  color: #959595;
  background-color: transparent;
  border: none;
  outline: none;
}

.menu-r .btn-user:hover {
  color: #959595;
  background-color: transparent;
  border: none;
}

.menu-r .btn-user .icon-user-head {
  margin-right: 10px;
  width: 37px;
  height: 37px;
}

.menu-r .btn-user .flex {
  display: table;
  vertical-align: middle;
  align-items: center;
}

.dui-popover-user {
  top: 59px;
  right: 3px;
}

.dui-popover-user .card-user .icon-user-head {
  margin-right: 10px;
  margin-right: 15px;
  width: 50px;
  height: 50px;
}

.dui-popover-user .card-user p {
  margin: 5px 0;
  color: #5d7088;
  word-break: break-all;
  word-wrap: break-word;
}

.dui-popover-user .flex button {
  width: 50%;
}

.dui-popover-user .flex button:first-child {
  border-right: 1px solid #d7d7d7;
  border-radius: 4px 0 0 4px;
}

.dui-popover-user .icon-shezhi {
  margin-right: 3px;
  font-size: 16px;
  vertical-align: -4px;
}

/* ***********TOP-NAV************** */
.menu .solution, .menu .initSolution {
  position: relative;
}

.menu .solution .subMenuSolution, .menu .initSolution .initSubMenuSolution {
  position: absolute;
  top: 56px;
  left: 0px;
  background-color: #fff;
  z-index: 100;
  min-width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  height: 0;
  box-sizing: content-box;
  overflow: hidden;
  width: 100%;
  padding: 0;
  transition: height 0.3s ease;
}

.menu .solution .subMenuSolution {
  background-color: #2B2D35;
}

.menu .solution .subMenuSolution li, .menu .initSolution .initSubMenuSolution li {
  float: none;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin: 10px 0;
}

.menu .solution .subMenuSolution li:hover {
  background-color: #363841;
  color: #0098fb;
}

.menu .solution .subMenuSolution li:hover a {
  color: #0098fb;
}

.menu .initSolution .initSubMenuSolution li:hover {
  background-color: #DCE4F1;
  color: #0098fb;
  cursor: pointer;
}

.menu .initSolution .initSubMenuSolution li:hover a {
  color: #0098fb;
}

.menu .solution .subMenuSolution li a {
  line-height: 36px;
  color: #fff;
}

.menu .initSolution .initSubMenuSolution li a {
  line-height: 36px;
  color: #666;
}

.flex {
  display: flex;
}

.dui-btn-text {
  color: #0097fa;
  background-color: transparent;
  border: none;
  outline: none;
}
</style>
