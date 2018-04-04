<template>
  <div :class="type">
    <a class="pre" v-if="prev" :class="{disabled: 1 === currentPage}" @click.prevent.stop="changePage(currentPage - 1)">上一页</a>
    <span v-if="start_page > 1">...</span>
    <a v-for="(_, index) in (new Array(pages))" :class="{active: (index + 1) === currentPage}"
       @click.prevent.stop="changePage(index + 1)">{{ index + 1 }}</a>
    <span v-if="end_page < pages">...</span>
    <a class="next" v-if="next" :class="{disabled: pages === currentPage}"
       @click.prevent.stop="changePage(currentPage + 1)">下一页</a>
  </div>
</template>

<script>
  export default {
    name: 'Pagination',
    props: ['itemsTotal', 'currentPage'],
    data() {
      return {
        type: 'pagination',
        prev: true,
        next: true,
        items_per_page: 10,
        display_pages_num: 10,				// 展示的页码个数
      }
    },
    computed: {
      pages() {
        return Math.ceil(this.itemsTotal / this.items_per_page);
      },
      half_entry() {
        return Math.ceil(this.display_pages_num / 2);
      },
      // 起始页码
      start_page() {
        return this.currentPage > this.half_entry ? Math.max(Math.min(this.currentPage - this.half_entry, this.pages - this.display_pages_num), 0) : 0;
      },
      // 结束页码
      end_page() {
        return this.currentPage > this.half_entry ? Math.min(this.currentPage + this.half_entry, this.pages) : Math.min(this.display_pages_num, this.pages);
      },
    },
    methods: {
      changePage(toPage) {
        console.log(this.currentPage)
        if (toPage < 0 || toPage > this.pages || toPage === this.currentPage) return;

        this.$store.dispatch('ChangeCurrentPage', toPage);
      },
    }
  }
</script>

<style lang="scss">
  .pager {
    margin: $line-height-computed 0;
    text-align: center;

    > a,
    > span {
      display: inline-block;
      padding: $padding-asym-base;
      border: 1px solid $pager-border;
      border-radius: $pager-border-radius;
      background-color: $pager-bg;
      user-select: none;

      &.disabled {
        &,
        &:hover,
        &:focus {
          color: $pager-disabled-color;
          background-color: $pager-bg;
          cursor: not-allowed;
        }
      }
    }

    > a:hover,
    > a:focus {
      background-color: $pager-hover-bg;
      text-decoration: none;
    }
  }

  .pagination {
    margin: $line-height-computed 0;
    border-radius: $border-radius-base;
    text-align: center;

    > a,
    > span {
      display: inline-block;
      position: relative;
      margin: 0 $margin-sm;
      padding: $padding-asym-base;
      line-height: $line-height-base;
      border: 1px solid $pagination-border;
      border-radius: $border-radius-base;
      color: $pagination-color;
      background-color: $pagination-bg;
      text-decoration: none;
      user-select: none;

      &.pre,
      &.next {
        position: relative;
      }

      &.pre {
        padding-left: 1.5em;

        &:before {
          content: " ";
          position: absolute;
          top: strip-units($padding-sym-base) * $font-size-base + $line-height-computed/2-4px;
          left: 3px;
          display: inline-block;
          width: 0;
          height: 0;
          vertical-align: middle;
          border-right: 5px solid;
          border-right: 5px solid \9
        ;
          border-top: 5px solid transparent;
          border-left: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
      }

      &.next {
        padding-right: 1.5em;
        &:after {
          content: " ";
          position: absolute;
          top: strip-units($padding-sym-base) * $font-size-base + $line-height-computed/2-4px;
          right: 3px;
          display: inline-block;
          width: 0;
          height: 0;
          margin-left: 2px;
          vertical-align: middle;
          border-left: 5px solid;
          border-left: 5px solid \9
        ;
          border-top: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
      }

      &:hover,
      &:focus {
        color: $pagination-hover-color;
        background-color: $pagination-hover-bg;
        border-color: $pagination-hover-border;
      }

      &.active {
        &,
        &:hover,
        &:focus {
          z-index: 2;
          color: $pagination-active-color;
          background-color: $pagination-active-bg;
          border-color: $pagination-active-border;
          cursor: default;
        }
      }

      &.disabled {
        &,
        &:hover,
        &:focus {
          color: $pagination-disabled-color;
          background-color: $pagination-disabled-bg;
          border-color: $pagination-disabled-border;
          cursor: not-allowed;
        }
      }
    }
  }
</style>