<template>
  <div>
    <ul class="nav nav-tabs">
      <li v-bind:class="{active: tab === 0}"><a href="" data-tabid="0" v-on:click.stop.prevent="switchTabs">基本选项</a>
      </li>
      <li v-bind:class="{active: tab === 1}"><a href="" data-tabid="1" v-on:click.stop.prevent="switchTabs">模板设置</a>
      </li>
      <li v-bind:class="{active: tab === 2}"><a href="" data-tabid="2" v-on:click.stop.prevent="switchTabs">SEO设置</a>
      </li>
      <li v-bind:class="{active: tab === 3}"><a href="" data-tabid="3" v-on:click.stop.prevent="switchTabs">投稿权限</a>
      </li>
    </ul>
    <form>
      <div v-bind:style="{display: (tab === 0 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label for="form.parentid" class="form-item-label">上级栏目</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <select name="form.parentid" id="form.parentid" class="form-control">
                <option>请选择</option>
                <option value="1">新闻</option>
                <option value="2">图片</option>
                <option value="3">关于</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.parentid" class="form-item-label">栏目名称</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.catname" name="form.catname" v-model="form.catname">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.ismenu" class="form-item-label">是否在导航显示</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.ismenu" type="checkbox" class="form-item-switch" v-model="form.ismenu">
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="{display: (tab === 1 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label for="form.pagesize" class="form-item-label">列表页信息数</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.pagesize" name="form.pagesize" v-model="form.pagesize">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 默认继承上一级栏目设置
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.categorytpl" class="form-item-label">栏目首页模板</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.categorytpl" name="form.categorytpl"
                     v-model="form.categorytpl">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.listtpl" class="form-item-label">栏目列表页模板</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.listtpl" name="form.listtpl" v-model="form.listtpl">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.showtpl" class="form-item-label">内容页模板</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.showtpl" name="form.showtpl" v-model="form.showtpl">
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="{display: (tab === 2 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label for="form.meta_title" class="form-item-label">META Title（栏目标题）</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.meta_title" name="form.meta_title"
                     v-model="form.meta_title">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.meta_keywords" class="form-item-label">META Keywords（栏目关键词）</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.meta_keywords" name="form.meta_keywords"
                     v-model="form.meta_keywords">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.meta_description" class="form-item-label">META Description（栏目描述）</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input type="text" class="form-control" id="form.meta_description" name="form.meta_description"
                     v-model="form.meta_description">
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="{display: (tab === 3 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label class="form-item-label">文档审核权限</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <label class="radio"><input type="radio" v-model="verifypost" value="0"> 默认审核</label>
              <label style="margin-left: 8px;"><input type="radio" v-model="verifypost" value="1"> 指定审核</label>
            </div>
          </div>
        </div>
        <div class="form-item" v-if="verifypost == 1">
          <label class="form-item-label">后台管理角色组</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <label><input type="checkbox" v-model="verifyrole" value="0"> 超级管理员</label>
              <label style="margin-left: 8px;"><input type="checkbox" v-model="verifyrole" value="1"> 总编</label>
              <label style="margin-left: 8px;"><input type="checkbox" v-model="verifyrole" value="2"> 编辑</label>
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 选中的管理组才能审核本栏目的文档
            </div>
          </div>
        </div>
        <div class="form-item">
          <label class="form-item-label">后台投稿权限</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <label><input type="radio" v-model="adminpost" value="0"> 允许投稿</label>
              <label style="margin-left: 8px;"><input type="radio" v-model="adminpost" value="1"> 禁止投稿</label>
            </div>
          </div>
        </div>
        <div class="form-item" v-if="adminpost == 1">
          <label class="form-item-label">后台管理角色组</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <label><input type="checkbox" v-model="postrole" value="0"> 超级管理员</label>
              <label style="margin-left: 8px;"><input type="checkbox" v-model="postrole" value="1"> 总编</label>
              <label style="margin-left: 8px;"><input type="checkbox" v-model="postrole" value="2"> 编辑</label>
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 选中的后台管理角色组将不能投稿
            </div>
          </div>
        </div>
      </div>
      <div class="config-submit">
        <button class="btn btn-outline-primary" @click.stop.prevent="onSubmit">提交</button>
        <button class="btn btn-outline-primary" @click.stop.prevent="onConceal">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ChangeCategory',
    props: ['rowData'],
    data() {
      return {
        tab: 0,
        verifypost: '',
        verifyrole: [],
        adminpost: '',
        postrole: [],
      }
    },
    computed: {
      form: function () {
        return this.rowData;
      },
    },
    methods: {
      switchTabs(e) {
        this.tab = parseInt(e.currentTarget.dataset.tabid);
      },
      onSubmit() {
        this.$emit('hidden');
      },
      onConceal() {
        this.$emit('hidden');
      },
    },
  }
</script>

<style lang="scss" scoped>
  $active-color: #009688;

  .nav {
    margin-bottom: 0;
    padding-left: $padding-sym-xl;
    list-style: none;
    @extend %clearfix;

    > li {
      position: relative;
      display: block;
      > a {
        position: relative;
        display: block;
        padding: $padding-sym-base $padding-sym-lg;
        color: $gray-800;
        text-decoration: none;
        &:hover,
        &:focus {
          background-color: $gray-200;
        }
      }
      &.disabled > a {
        color: $gray-600;
        text-decoration: none;
        background-color: transparent;
        cursor: not-allowed;
      }
    }

    // Prevent IE8 from misplacing imgs
    // See https://github.com/h5bp/html5-boilerplate/issues/984#issuecomment-3985989
    > li > a > img {
      max-width: none;
    }
  }

  .nav-tabs {
    position: relative;
    bottom: -1px;

    > li {
      float: left;
      margin-right: $margin-sm;

      > a {
        line-height: $line-height-lg;
        border: 1px solid $gray-400;
        border-radius: $border-radius-base $border-radius-base 0 0;
      }
      &.active > a {
        padding-top: strip-units($padding-sym-base) * $font-size-base - 1;
        border-top: 2px solid $active-color;
        border-bottom: 1px solid transparent;
        background: $gray-100;
      }
    }
  }

  .config-content {
    padding: $padding-asym-base;
    border: 1px solid $gray-400;

    @extend %clearfix;
  }

  .form-item-label {
    width: 220px;
    text-align: right;
  }

  .form-item-content {
    margin-left: 220px;
  }

  .config-submit {
    margin-left: 220px;
    padding:  $padding-sym-lg $padding-asym-base;
  }
</style>