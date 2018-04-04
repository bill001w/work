<template>
  <main>
    <div class="table-m-panel">
      <button class="btn btn-outline-primary" @click="add">新增</button>
      <button class="btn btn-danger" @click="del">删除</button>
    </div>
    <Modal ref="modalf">
      <ChangeCategory @hidden="hideModal" :rowData="rowData"></ChangeCategory>
    </Modal>
    <el-table
        style="width: 100%"
        :data="tableData"
        ref="multipleTable"
        border
        max-height="600"
        @selection-change="handleSelectionChange"
    >
      <el-table-column
          type="selection"
          fixed
          width="55">
      </el-table-column>
      <el-table-column
          prop="catid"
          label="catid"
          width="60">
      </el-table-column>
      <el-table-column
          prop="prefix"
          label="栏目名称"
          width="150"
          resizable
          align="left">
        <template slot-scope="scope">
          <span v-html="scope.row.prefix"></span>
        </template>
      </el-table-column>
      <el-table-column
          prop="items"
          label="数量"
          width="60">
      </el-table-column>
      <el-table-column
          prop="ismenu"
          label="导航"
          width="60">
        <template slot-scope="scope">
          <span class="label label-default">{{ scope.row.ismenu ? '√' : '×'}}</span>
        </template>
      </el-table-column>
      <el-table-column
          prop="listorder"
          label="排序"
          width="60">
      </el-table-column>
      <el-table-column
          prop="pagesize"
          label="页数"
          width="60">
      </el-table-column>
      <el-table-column
          prop="categorytpl"
          label="categorytpl"
          width="200">
      </el-table-column>
      <el-table-column
          prop="listtpl"
          label="listtpl"
          width="200">
      </el-table-column>
      <el-table-column
          prop="showtpl"
          label="showtpl"
          width="200">
      </el-table-column>
      <el-table-column
          prop="meta_title"
          label="meta_title"
          width="200">
      </el-table-column>
      <el-table-column
          prop="meta_keywords"
          label="meta_keywords"
          width="200">
      </el-table-column>
      <el-table-column
          prop="meta_description"
          label="meta_description"
          width="200">
      </el-table-column>
      <el-table-column
          prop="edit"
          fixed="right"
          width="180"
          label="操作">
        <template slot-scope="scope">
          <button class="btn btn-outline-primary btn-sm" @click="handleEdit(scope.row)">编辑</button>
          <button class="btn btn-outline-primary btn-sm" @click="add(scope.row.catid)">发布</button>
          <button class="btn btn-danger btn-sm" @click="add(scope.row.catid)">删除</button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination itemsTotal="40" :currentPage="2" @changePageData="changePageData"></Pagination>
  </main>
</template>

<script>
  import geCategory from './api';
  import ChangeCategory from './change';
  import Modal from '@/libs/me/Modal';
  import Pagination from '@/libs/me/Pagination';

  export default {
    name: 'Category',
    components: {Modal, ChangeCategory, Pagination},
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
        this.rowData = {};
        this.$refs.modalf.show();
      },
      del() {

      },
      hideModal() {
        this.$refs.modalf.hide();
      },
      changePageData() {
        geCategory()
            .then(res => {
              this.tableData = res.data;
            });
      },
    },
    created() {
      geCategory()
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