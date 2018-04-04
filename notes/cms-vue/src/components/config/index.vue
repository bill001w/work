<template>
  <div class="frame-wrapper">
    <ul class="nav nav-tabs">
      <li v-bind:class="{active: tab === 0}"><a href="" data-tabid="0" @click.stop.prevent="switchTabs">系统相关</a>
      </li>
      <li v-bind:class="{active: tab === 1}"><a href="" data-tabid="1" @click.stop.prevent="switchTabs">搜索设置</a>
      </li>
      <li v-bind:class="{active: tab === 2}"><a href="" data-tabid="2" @click.stop.prevent="switchTabs">TAG相关</a>
      </li>
      <li v-bind:class="{active: tab === 3}"><a href="" data-tabid="3" @click.stop.prevent="switchTabs">图片相关</a>
      </li>
    </ul>
    <form>
      <div v-bind:style="{display: (tab === 0 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label for="form.SYS_MEMBER" class="form-item-label">会员功能开关</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SYS_MEMBER" type="checkbox" class="form-item-switch" v-model="form.SYS_MEMBER">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_ADMIN_PAGESIZE" class="form-item-label">后台数据分页条数</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_ADMIN_PAGESIZE" v-model="form.SITE_ADMIN_PAGESIZE" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_SYSMAIL" class="form-item-label">网站邮箱地址</label>
          <div class="form-item-content">
            <div class="form-item-content-input" style="width:400px;">
              <input id="form.SITE_SYSMAIL" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_BDPING" class="form-item-label">百度Ping推送</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_BDPING" type="checkbox" class="form-item-switch" v-model="form.SITE_BDPING">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_NAME" class="form-item-label">网站名称</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_NAME" type="text" class="form-control">
            </div>
          </div>
        </div>

        <div class="form-item">
          <label for="form.SITE_TITLE" class="form-item-label">网站首页SEO标题</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_TITLE" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_KEYWORDS" class="form-item-label">"网站SEO关键字"</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_KEYWORDS" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_DESCRIPTION" class="form-item-label">网站SEO描述信息</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_DESCRIPTION" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_JS" class="form-item-label">第三方统计代码</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_JS" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_ICP" class="form-item-label">ICP备案序号</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_ICP" type="text" class="form-control">
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="{display: (tab === 1 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label for="form.SITE_SEARCH_PAGE" class="form-item-label">搜索列表页信息数</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_SEARCH_PAGE" type="text" class="form-control">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 条数据
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_SEARCH_DATA_CACHE" class="form-item-label">搜索结果缓存时间</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_SEARCH_DATA_CACHE" type="text" class="form-control">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 单位秒
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_SEARCH_INDEX_CACHE" class="form-item-label">搜索索引缓存时间</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_SEARCH_INDEX_CACHE" type="text" class="form-control">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 小时
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_SEARCH_DATA_CACHE" class="form-item-label">参数kw匹配字段</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <label><input type="radio" v-model="form.SITE_SEARCH_KW_OR" value="0">AND</label>
              <label style="margin-left: 5px;"><input type="radio" v-model="form.SITE_SEARCH_KW_OR" value="1">OR</label>
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="{display: (tab === 2 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label for="form.SITE_KEYWORD_NUMS" class="form-item-label">关键词页信息数</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_KEYWORD_NUMS" type="text" class="form-control">
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_KEYWORD_CACHE" class="form-item-label">关键词页信息缓存时间</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_KEYWORD_CACHE" type="text" class="form-control">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 小时
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_TAG_PAGE" class="form-item-label">TAG列表页信息数</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_TAG_PAGE" type="text" class="form-control">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> TAG列表页面，每页显示的信息数量
            </div>
          </div>
        </div>
        <div class="form-item">
          <label for="form.SITE_TAG_CACHE" class="form-item-label">TAG列表缓存时间</label>
          <div class="form-item-content">
            <div class="form-item-content-input">
              <input id="form.SITE_TAG_CACHE" type="text" class="form-control">
            </div>
            <div class="form-item-content-feedback">
              <i class="fa fa-hand-o-right"></i> 小时
            </div>
          </div>
        </div>
      </div>
      <div v-bind:style="{display: (tab === 3 ? 'block' : 'none')}" class="config-content">
        <div class="form-item">
          <label class="form-item-label">内容缩略图宽高</label>
          <div class="form-item-content">
            <div class="form-item-content-input form-inline">
              <input id="form.SITE_THUMB_WIDTH" type="text" class="form-control" style="width: 60px;">
              ×
              <input id="form.SITE_THUMB_HEIGHT" type="text" class="form-control" style="width: 60px;">
            </div>
          </div>
        </div>
      </div>
      <div class="config-submit">
        <button class="btn btn-default">提交</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'admin-config',
    data() {
      return {
        tab: 0,
        form: {
          SITE_ADMINLOG: true,
          SYS_MEMBER: '',
          SITE_ADMIN_PAGESIZE: 10,
          SITE_SYSMAIL: '',
          SITE_TIMEZONE: '(GMT +08:00)',
          SITE_TIME_FORMAT: '',
          SITE_BDPING: '',
          SITE_NAME: '',
          SITE_TITLE: '',
          SITE_KEYWORDS: '',
          SITE_DESCRIPTION: '',
          SITE_JS: '',
          SITE_ICP: '',
          SITE_MAP_AUTO: true,
          SITE_MAP_UPDATE: 30,
          SITE_MAP_TIME: 1,
          SITE_MAP_NUM: 100,
          SITE_SEARCH_PAGE: '',
          SITE_SEARCH_DATA_CACHE: '',
          SITE_SEARCH_TYPE: '普通搜索',
          SITE_SEARCH_INDEX_CACHE: '',
          SITE_SEARCH_KW_FIELDS: '',
          SITE_SEARCH_KW_OR: 'AND',
          SITE_SEARCH_SPHINX_HOST: '',
          SITE_SEARCH_SPHINX_PORT: '',
          SITE_SEARCH_SPHINX_NAME: '',
          SITE_KEYWORD_NUMS: '',
          SITE_KEYWORD_CACHE: '',
          SITE_TAG_PAGE: '',
          SITE_TAG_CACHE: '',
          SITE_THUMB_WIDTH: '',
          SITE_THUMB_HEIGHT: '',
          SITE_WATERMARK: '',
          SITE_WATERMARK_IMAGE: '',
          SITE_WATERMARK_TEXT: '',
          SITE_WATERMARK_SIZE: '',
        },
      }
    },
    methods: {
      switchTabs(e) {
        this.tab = parseInt(e.currentTarget.dataset.tabid);
      }
    },
  }
</script>

<style lang="scss">
  $active-color: #009688;

  html, body {
    min-width: 0;
  }

  .frame-wrapper {
    padding: $padding-sym-lg;
    padding-left: $padding-sym-xl;
  }

  .form-item-label {
    width: 220px;
    text-align: right;
  }

  .form-item-content {
    margin-left: 220px;
  }

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

  .config-submit {
    margin-left: 220px;
    padding: $padding-asym-base;
    padding-top: $padding-sym-lg;
  }
</style>