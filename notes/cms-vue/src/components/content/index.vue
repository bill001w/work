<template>
  <main>
    <div class="table-m-panel">
      <button class="btn btn-outline-primary" @click="add">新增</button>
      <button class="btn btn-danger" @click="del">删除</button>
    </div>
    <Modal ref="modalf">
      <ContentChange @hidden="hideModal" :rowData="rowData"></ContentChange>
    </Modal>
    <el-table
        ref="multipleTable"
        :data="tableData"
        border
        style="width: 100%"
        max-height="600"
        class="content-table"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          fixed
          width="55">
      </el-table-column>
      <el-table-column
          prop="cid"
          label="ID"
          width="60">
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题"
          width="500"
          resizable
          align="left">
      </el-table-column>
      <el-table-column
          prop="create_username"
          label="发布人"
          width="150">
      </el-table-column>
      <el-table-column
          prop="update_time"
          label="更新时间"
          width="150">
      </el-table-column>
      <el-table-column
          prop="edit"
          width="140"
          label="操作">
        <template slot-scope="scope">
          <button class="btn btn-outline-primary btn-sm" @click="handleEdit(scope.row)">编辑</button>
          <button class="btn btn-outline-primary btn-sm" @click="add(scope.row.catid)">发布</button>
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<script>
  import getContent from './api';
  import ContentChange from './change';
  import Modal from '@/libs/me/Modal';

  export default {
    name: 'Content',
    components: {Modal, ContentChange},
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        editRow: undefined,
        rowData: {}
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val.map(function (value) {
          return value.catid;
        });

        console.log(this.multipleSelection)
      },
      handleEdit(row) {
        this.editRow = row.catid;
        this.rowData = row;

        this.$refs.modalf.show();
      },
      add() {
        console.log(this)
        this.rowData = {};
        this.$refs.modalf.show();
      },
      del() {

      },
      hideModal() {
        this.$refs.modalf.hide();
      },
    },
    created() {
      getContent()
          .then(res => {
            this.tableData = res.data;
          });
    }
  }
</script>

<style lang="scss">
  html, body {
    min-width: 0;
  }

  main {
    padding: $padding-sym-lg;
    padding-left: $padding-sym-xl;
  }

  .table-m-panel {
    margin-bottom: $margin-sm;
    padding: $padding-sym-base;
    background-color: $gray-150;
  }

  .el-table th {
    background-color: $gray-200;
  }

  .el-table th,
  .el-table td {
    padding: 6px 0;
  }

  .el-table .cell {
    padding: 0 6px;
    text-align: center;
  }

  td.is-left .cell {
    text-align: left;
  }
</style>