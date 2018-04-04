<template>
  <div style="padding:10px;">
    <div class="table-header"><p>服务器信息</p></div>
    <el-table :data="tableData" :show-header="false" border style="width: 100%">
      <el-table-column prop="desc"></el-table-column>
      <el-table-column prop="info"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import getMainInfo from './api';

  export default {
    name: 'admin-home',
    data() {
      return {
        tableData: null,
      }
    },
    created() {
      getMainInfo()
          .then(response => {
            this.tableData = response.data;
          });
    },
  }
</script>

<style lang="scss">
  html, body {
    min-width: 0;
  }

  .el-table__body-wrapper {
    overflow: hidden;
  }

  .table-header {
    padding: 10px;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    background: $gray-200;

    > p {
      margin: 0;
    }
  }
</style>