<template>
  <div class="modal-wrapper">
    <form ref="form" :model="form" label-width="160px">
      <div class="form-item">
        <label for="form.catid" class="form-item-label">栏目</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <select name="form.catid" id="form.catid" class="form-control">
              <option>请选择</option>
              <option value="1">新闻</option>
              <option value="2">图片</option>
              <option value="3">关于</option>
            </select>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="form.title" class="form-item-label">标题</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <input type="text" class="form-control" id="form.title" name="form.title" v-model="form.title">
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="form.keywords" class="form-item-label">关键字</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <input type="text" class="form-control" id="form.keywords" name="form.keywords" v-model="form.keywords">
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="form.description" class="form-item-label">描述</label>
        <div class="form-item-content">
          <div class="form-item-content-input" style="display: block;width:100%;">
            <textarea class="form-control" id="form.description" name="form.description"
                      v-model="form.description" style="width:100%;" cols="4"></textarea>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="form.description" class="form-item-label">正文</label>
        <div class="form-item-content">
          <div class="form-item-content-feedback-label form-inline">
            <label class="radio"><input type="checkbox" v-model="checked">是否截取内容</label>
            <input type="text" class="form-control">
            <label class="radio"><input type="checkbox" v-model="checked">是否下载远程图片</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="form.hits" class="form-item-label">点击量</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <input type="text" class="form-control" id="form.hits" name="form.hits" v-model="form.hits">
          </div>
        </div>
      </div>
      <div class="form-item">
        <label class="form-item-label">更新时间</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <label class="radio-inline"><input type="radio" v-model="form.updatetime" value="1">当前时间</label>
            <label class="radio-inline"><input type="radio" v-model="form.updatetime" value="2">指定时间</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label class="form-item-label">排序</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="0">非精华文章</label>
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="1">设为精华</label>
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="2">全局置顶</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label class="form-item-label">状态</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="0">已审核</label>
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="1">未审核</label>
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="2">拒绝</label>
            <label class="radio-inline"><input type="radio" v-model="form.digest" value="3">回收站</label>
          </div>
        </div>
      </div>
      <div class="form-item">
        <label for="form.catname" class="form-item-label">相关文档</label>
        <div class="form-item-content">
          <div class="form-item-content-input">
            <input type="text" class="form-control" id="form.catname" name="form.catname" v-model="form.catname">
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
    name: 'ContentChange',
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

  .modal-wrapper {
    padding: $padding-sym-lg;
  }

  .form-item-label {
    width: 120px;
    text-align: left;
  }

  .form-item-content {
    margin-left: 120px;
  }

  .config-submit {
    margin-left: 120px;
    padding: $padding-sym-lg $padding-asym-base;
  }
</style>