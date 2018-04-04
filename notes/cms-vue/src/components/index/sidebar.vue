<template>
  <aside class="page-aside">
    <nav>
      <ul>
        <template v-for="(item, index) in menu">
          <li class="active" v-if="item.menu.length && item.name !== '内容管理'">
            <span class="page-aside-collapse" @click.prevent.stop="hideMenu"><i :class="['fa', 'fa-' + item.icon]"></i>{{ item.name }}<i
                class="fa fa-chevron-up page-aside-arrow"></i></span>
            <ul class="in">
              <li v-for="(submenu, subIndex) in item.menu">
                <a :href="submenu.uri" :data-_aid_="index + '-' + subIndex"
                   @click.stop.prevent="tabEvent">
                  <i class="fa fa-circle-o"></i><span>{{ submenu.name }}</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="active" v-else-if="item.name === '内容管理'">
            <span class="page-aside-collapse" @click.prevent.stop="hideMenu" v-if="ztreeData.length">
              <i :class="['fa', 'fa-' + item.icon]"></i>{{ item.name }}<i class="fa fa-chevron-up page-aside-arrow"></i>
            </span>
            <span class="page-aside-collapse" v-else>
              <i :class="['fa', 'fa-' + item.icon]"></i>{{ item.name }}
            </span>
            <vueZtree class="in" :list.sync='ztreeData' :func='nodeClick' :expand='expandClick'
                      :is-open='true'></vueZtree>
          </li>
          <li v-else>
            <a :href="item.uri" :data-_aid_="'' + index" @click.stop.prevent="tabEvent"><i
                :class="['fa', 'fa-' + item.icon]"></i>{{ item.name }}
            </a>
          </li>
        </template>
      </ul>
    </nav>
    <div class="collapse-sidebar" @click.prevent="collapseSidebar">
      <i class="fa fa-caret-left"></i>
    </div>
  </aside>
</template>

<script>
  import {getCatMenu, getMenu} from './api';
  import Collapse from '@/libs/me/collapse';
  import vueZtree from '@/libs/z-tree/vue-ztree.vue';

  export default {
    name: 'MainSidebar',
    components: {vueZtree},
    data() {
      return {
        collapseSidebarClassValue: false,
        menu: [],
        ztreeData: []
      }
    },
    created() {
      getMenu()
          .then((res) => {
            this.menu = res.data;

            res.data.some((value) => {
              if ('内容管理' === value.name) {
                getCatMenu()
                    .then((res) => {
                      this.ztreeData = res.data;
                    });

                return true;
              }
            })
          });
    },
    methods: {
      collapseSidebar() {
        document.body.classList.toggle('full-page');
      },
      hideMenu(e) {
        let li = e.currentTarget.parentElement;
        let ul = e.currentTarget.nextElementSibling;
        let col = new Collapse(ul);

        col.toggle();
        li.classList.toggle('active');
      },
      tabEvent(e) {
        let a = e.currentTarget;

        this.$store.dispatch('addTab', {
          "id": a.dataset['_aid_'],
          "text": a.innerText,
          "href": a.href
        });
      },
      nodeClick: function (m) {
        if (m.isExpand && m.children.length) {
          m.isFolder = !m.isFolder;
        } else if (!m.children.length && m.url) {
          this.$store.dispatch('addTab', {
            "id": 'cont' + m.id,
            "text": m.name,
            "href": m.url
          });
        }
      },
      expandClick: function (m) {
        if (m.isExpand) {
          m.isFolder = !m.isFolder;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index";
  @import "../../libs/me/collapse";

  .page-aside {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: $sidebar-width;
    padding-top: $header-height;
    color: $sidebar-color;
    background-color: $sidebar-ul;
    overflow: visible;
    transition: left 0.3s ease-in;

    @at-root {
      .full-page & {
        left: -$sidebar-width;
      }
    }

    a {
      color: $sidebar-color;
      text-decoration: none;
    }

    > nav {
      height: 100%;
      overflow: auto;
      background-color: $sidebar-background;

      > ul {
        list-style: none;
        margin: 0;
        padding: 0;

        > li {
          position: relative;

          > span,
          > a {
            display: block;
            padding-left: $sidebar-item-left;
            line-height: 45px;
            border-left: 4px solid transparent;
            color: $sidebar-color;
            background: $sidebar-ul;

            &:hover,
            &.active {
              color: $sidebar-item-active;
              background: $sidebar-ul-active-background;
              border-left-color: $sidebar-item-active-background;
            }

            > .fa:first-child {
              position: absolute;
              left: $sidebar-icon-left;
              margin-right: $margin-sm;
              width: 16px;
              line-height: inherit;
              text-align: center;
            }

            > .page-aside-arrow {
              position: absolute;
              top: 16px;
              right: 15px;
              font-size: 12px;
              opacity: 0.6;
              transition: transform 0.3s;
            }
          }

          > ul {
            list-style: none;
            margin: 0;
            padding: 0;

            > li {
              > span,
              > a {
                display: block;
                padding-left: $sidebar-item-left;
                line-height: 40px;
                border-left: 4px solid transparent;
                color: $sidebar-color;
                background: $sidebar-background;

                &:hover,
                &.active {
                  border-left-color: $sidebar-item-active-background;
                  color: $sidebar-item-active;
                  background: $sidebar-item-active-background;
                }

                > .fa:first-child {
                  position: absolute;
                  left: $sidebar-icon-left;
                  margin-right: $margin-sm;
                  width: 16px;
                  line-height: inherit;
                  text-align: center;
                }
              }
            }
          }

          &.active {
            .page-aside-arrow {
              transform: rotate(180deg);
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .collapse-sidebar {
    position: absolute;
    top: 50%;
    left: 100%;
    z-index: 1;
    width: 20px;
    height: 40px;
    line-height: 40px;
    margin-top: -40px;
    padding-left: 5px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background: $sidebar-ul;

    > .fa {
      font-size: 20px;
      transition: transform 0.3s ease-in;

      @at-root {
        .full-page & {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>