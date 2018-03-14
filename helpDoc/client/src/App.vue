<template lang="html">
  <div>
    <headnav class="header" v-if="!isAdmin"></headnav>
    <div class="main">
      <sidebar v-if="!isAdmin" :data="sideData" v-on:update="loadSidebar"></sidebar>
      <div class="content">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import headnav from "./components/headnav";
import sidebar from "./components/sidebar";

export default {
  components: {
    sidebar,
    headnav
  },
  data() {
    return {
      activeIndex: "2",
      sideData: [],
      user: {},
      company: {},
      popoverUserShow: false,
      skwd: "",
      isAdmin: false
    };
  },
  watch: {
    $route: "judgeAdmin"
  },
  methods: {
    loadSidebar() {
      this.$http.get("/docsserver/sidebar").then(response => {
        this.sideData = JSON.parse(response.data.data);
      });
    },
    search() {
      if (!this.skwd) {
        return;
      }
      this.$router.push("/search/" + this.skwd);
      this.skwd = "";
    },
    judgeAdmin() {
      if (
        location.href.indexOf("login") > -1 ||
        location.href.indexOf("editor") > -1 ||
        location.href.indexOf("dashboard") > -1
      ) {
        this.isAdmin = true;
      } else {
        this.loadSidebar();
      }
    }
  }
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
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
}

.content {
  position: absolute;
  top: 60px;
  left: 260px;
  right: 0;
  bottom: 0;

  .markdown-body {
    padding: 0 45px;
    overflow: auto;
    width: 100%;
    padding-right: 270px;
  }

  .nav {
    position: fixed;
    right: 30px;
    top: 70px;
    bottom: 0;
    overflow: auto;

    .tree_right {
      background: #fff;
      padding: 0 20px;
      width: 220px;
      border-left: 1px solid #20a0ff;
      margin-top: 20px;

      h1, h2, h3, h4, h5, h6 {
        font-weight: 100;
        cursor: pointer;
        position: relative;
      }

      h1 {
        font-size: 14px;
        color: #333;
      }

      h2 {
        font-size: 12px;
        padding-left: 10px;
        margin: 4px 0;
        color: #666;
        font-weight: 200;
      }

      .active {
        h1, h2 {
          color: #20a0ff;
        }
      }
    }
  }
}

.icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.dui-popover {
  position: absolute;
  right: 15px;
  font-size: 14px;
  color: #475669;
  background-color: #fff;
  box-shadow: 0 2px 10px #d7d7d7;
  border-radius: 4px;
}

.dui-popover-content {
  padding: 10px 15px;
}

.dui-popover-footer {
  padding: 10px 0;
  height: 45px;
  line-height: 25px;
  text-align: center;
  background-color: #f7f7f7;
  overflow: hidden;

  .el-button {
    width: 100%;
    padding: 0;
  }
}

.dui-popover-footer.flex {
  .el-button {
    width: 50%;
  }

  .el-button:first-child {
    border-right: 1px solid #d7d7d7;
    border-radius: 0;
  }
}

.ai-btn--text {
  color: #0097fa;
  background-color: transparent;
  border: none;
}

.menu-r {
  .ai-btn--icon {
    float: left;
    padding: 0 15px;
    height: 56px;
  }
}

.icon {
  margin: 0;
  font-size: 20px;
}

.icon-shibai {
  font-size: 14px;
}

.icon-shezhi {
  margin-right: 3px;
  font-size: 16px;
  vertical-align: -4px;
}

#btn-user {
  border: none;
  float: right;
  color: #959595;

  .flex {
  }

  .img-user-head {
    margin-right: 10px;
    width: 37px;
    height: 37px;
  }
}

.card-user {
  img {
    margin-right: 15px;
  }

  p {
    margin: 5px 0;
  }

  .img-user-head {
    margin-right: 10px;
    width: 50px;
    height: 50px;
  }
}

.card-msg {
  .list-item + .list-item {
    border-top: 1px solid #e7e7e7;
  }

  .list-item:first-child {
    padding-top: 0;

    .el-button {
      top: -3px;
    }
  }

  .list-item:last-child {
    padding-bottom: 0;
  }

  .list-item {
    padding: 7px 0;
    position: relative;
    cursor: pointer;

    p + p {
      margin-top: 3px;
    }

    .el-button {
      margin-top: 0;
      padding: 5px;
      position: absolute;
      top: 3px;
      right: -5px;
    }
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

/* 滚动条的滑轨背景颜色 */
::-webkit-scrollbar-thumb {
  background-color: rgba(151, 168, 190, 0.3);
  border-radius: 5px;
}

/* 滑块颜色 */
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(151, 168, 190, 0.5);
  border-radius: 5px;
}

/* 滑块颜色 */
.search {
  position: absolute;
  left: 0;
  top: 56px;
  height: 50px;
  line-height: 50px;
  width: 260px;
  padding: 0 20px;
  background-color: #fcfcfc;

  input {
    line-height: 32px;
    height: 32px;
    border: 1px solid #ededed;
    border-radius: 5px;
    width: 100%;
    padding: 0 32px 0 10px;
    outline: none;
  }

  img {
    width: 16px;
    position: absolute;
    top: 18px;
    right: 30px;
    cursor: pointer;
  }
}

.header {
  padding: 0 40px;
  min-width: 700px;
  height: 56px;
  width: 100%;
  font-size: 16px;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
