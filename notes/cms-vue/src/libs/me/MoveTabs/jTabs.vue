<template>
  <div id="J_tab">
    <a id="J_pre" @click.stop.prevent="_J_pre"><i class="fa fa-backward"></i></a>
    <div id="J_tab_c" @click.stop.prevent="ae">
      <ul id="J_menuTab">
        <li v-for="item in tabInfo" :class="{current:item.id === currentTab}">
          <a :data-id="item.id" @click.stop.prevent="current">{{ item.text }}
            <span class="J_menuTab_close" @click.stop.prevent="close">
              <i class="fa fa-window-close-o"></i>
            </span></a>
        </li>
      </ul>
    </div>
    <a id="J_next" @click.stop.prevent="_J_next"><i class="fa fa-forward"></i></a>
    <a id="J_logout" @click.stop.prevent="J_logout"><i class="fa fa-sign-out"></i></a>
  </div>
</template>

<script>
  import {transitionEnd} from '@/libs/me/transition.js';

  export default {
    name: 'jTabs',
    props: ['tabInfo', 'currentTab'],
    data() {
      return {
        transitioning: false
      }
    },
    methods: {
      _J_pre(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!this.transitioning) {
          let pre = document.querySelector('#J_menuTab .current').previousElementSibling;
          if (pre) {
            this.$store.dispatch('changeCurrentTab', pre.children[0].dataset.id);
          }
        }
      },
      _J_next(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!this.transitioning) {
          let next = document.querySelector('#J_menuTab .current').nextElementSibling;
          if (next) {
            this.$store.dispatch('changeCurrentTab', next.children[0].dataset.id);
          }
        }
      },
      current(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!this.transitioning) {
          let current = e.currentTarget;
          if (current) {
            this.$store.dispatch('changeCurrentTab', current.dataset.id);
          }
        }
      },
      close(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!this.transitioning) {
          let current = e.currentTarget;
          if (current) {
            this.$store.dispatch('deleteTab', current.parentElement.dataset.id);
          }
        }
      },
      showTab(li) {
        const ul = document.getElementById('J_menuTab');
        const J_pre = document.getElementById('J_pre');
        const J_next = document.getElementById('J_next');
        const _complete = () => {
          ul.removeEventListener(transitionEnd(), _complete);
          this.transition = false;
        };

        if (li) {
          let distance,
              li_offset = li.getBoundingClientRect(),
              li_width = li.offsetWidth,
              next_left = J_next.getBoundingClientRect().left,
              pre_right = J_pre.getBoundingClientRect().left + J_pre.offsetWidth,
              ul_left = ul.style.left ? parseInt(ul.style.left) : 0;

          if (li_offset.left + li_width > next_left) {
            distance = li_offset.left + li_width - next_left;
            ul.style.left = (ul_left - distance) + 'px';

            if (transitionEnd()) {
              this.transition = true;
              ul.addEventListener(transitionEnd(), _complete);
            }
          }

          if (li_offset.left < pre_right) {
            distance = pre_right - li_offset.left;
            ul.style.left = (ul_left + distance) + 'px';

            if (transitionEnd()) {
              this.transition = true;
              ul.addEventListener(transitionEnd(), _complete);
            }
          }
        }
      },
      J_logout() {
      },
    },
    updated() {
      this.showTab(document.querySelector('#J_menuTab li.current'))
    }
  }
</script>

<style scoped lang="scss">
  $height: 42px;

  #J_tab {
    position: relative;
    border-bottom: 2px solid rgba(44, 59, 65, 1);
    background-color: #ffffff;
  }

  #J_pre,
  #J_next,
  #J_logout {
    text-decoration: none;
    position: absolute;
    bottom: 0;
    width: 40px;
    padding: ($height - 22px)/2 13px;
    line-height: 20px;
    font-size: 12px;
    color: rgba(44, 59, 65, 0.4);
    text-align: center;
  }

  #J_pre:hover,
  #J_pre:focus,
  #J_pre:active,
  #J_next:hover,
  #J_next:focus,
  #J_next:active,
  #J_logout:hover,
  #J_logout:focus,
  #J_logout:active {
    color: rgba(44, 59, 65, 0.6);
    background-color: rgba(44, 59, 65, 0.1);
  }

  #J_pre {
    left: 0;
    border-right: 1px solid rgba(44, 59, 65, 0.1);
  }

  #J_next {
    right: 40px;
    border-left: 1px solid rgba(44, 59, 65, 0.1);
    border-right: 1px solid rgba(44, 59, 65, 0.1);
  }

  #J_logout {
    right: 0;
    color: rgba(255, 255, 255, 0.8);
    background: #393d49;
  }

  #J_tab_c {
    position: relative;
    margin: 0 40px;
    height: $height - 2px;
    overflow: hidden;
    border-bottom: none;
  }

  #J_menuTab {
    list-style: none;
    position: absolute;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    width: 10000px;
    overflow: hidden;
    transition: left 0.2s;
  }

  #J_menuTab > li {
    display: block;
    position: relative;
    float: left;
  }

  #J_menuTab > li > a {
    text-decoration: none;
    display: block;
    position: relative;
    padding: ($height - 22px)/2 20px;
    line-height: 20px;
    border-right: 1px solid rgba(44, 59, 65, 0.1);
    border-radius: 0;
    font-size: 12px;
    color: rgba(44, 59, 65, 0.8);
    cursor: pointer;
    user-select: none;
  }

  #J_menuTab > li > a:hover,
  #J_menuTab > li > a:focus {
    color: rgba(44, 59, 65, 0.9);
    background-color: rgba(44, 59, 65, 0.1);
  }

  #J_menuTab > li.current > a {
    border-right: 1px solid #2c3b41;
    color: #fafafa;
    background-color: #2c3b41;
  }

  #J_menuTab > li.current > a:hover,
  #J_menuTab > li.current > a:focus {
    color: #ffffff;
  }

  .J_menuTab_close {
    display: inline-block;
    margin-left: 8px;
    font-size: 12px;
    color: rgba(44, 59, 65, 0.9);
    cursor: pointer;
  }

  li.current > a > .J_menuTab_close {
    color: #ffffff;
    opacity: 0.9;
  }

  li.current > a:hover > .J_menuTab_close,
  li.current > a:focus > .J_menuTab_close {
    opacity: 1;
  }
</style>