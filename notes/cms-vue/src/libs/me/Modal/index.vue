<template>
  <div class="modal fade" ref="m_modal" v-on:click.stop.self="escapeEvent">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {transitionEnd} from '@/libs/me/transition';

  const doAnimation = transitionEnd();

  export default {
    name: 'MModal',
    props: ['escEvt'],
    data() {
      return {
        modalShow: false,
      };
    },
    methods: {
      show() {
        if (this.modalShow) return;

        const backdrop = document.createElement('div');
        const backdropEvent = () => {
          backdrop.removeEventListener(doAnimation, backdropEvent);

          this.$refs.m_modal.style.display = 'block';
          this.$refs.m_modal.addEventListener(doAnimation, modalEvent);
          this.$refs.m_modal.offsetLeft;
          this.$refs.m_modal.classList.add('in');
        };
        const modalEvent = () => {
          this.$refs.m_modal.removeEventListener(doAnimation, modalEvent);

          this.modalShow = true;
        };

        backdrop.classList.add('modal-backdrop');
        backdrop.classList.add('fade');
        document.body.classList.add('modal-open');
        document.body.appendChild(backdrop);
        backdrop.offsetLeft;
        backdrop.classList.add('in');

        if (doAnimation) {
          backdrop.addEventListener(doAnimation, backdropEvent);
        } else {
          this.$refs.m_modal.style.display = 'block';
          this.$refs.m_modal.classList.add('in');
          this.modalShow = true;
        }
      },
      hide() {
        if (!this.modalShow) return;

        const backdrop = document.querySelectorAll('div.modal-backdrop');
        const backdropEvent = () => {
          this.$refs.m_modal.classList.remove('in');
          this.$refs.m_modal.addEventListener(doAnimation, modalEvent);
          // m_modal只有1个，即使下面的某个backdrop去掉backdropEvent事件，也不会影响m_modal的hide
          backdrop.forEach(function (dom) {
            dom.removeEventListener(doAnimation, backdropEvent);
            dom.remove();
          });
        };
        const modalEvent = () => {
          this.$refs.m_modal.removeEventListener(doAnimation, modalEvent);
          this.modalShow = false;
          this.$refs.m_modal.style.display = 'none';
        };

        document.body.classList.remove('modal-open');

        if (doAnimation) {
          backdrop.forEach(function (dom) {
            dom.classList.remove('in');
            dom.addEventListener(doAnimation, backdropEvent);
          });
        } else {
          backdrop.forEach(function (dom) {
            dom.remove();
          });
          this.$refs.m_modal.style.display = 'none';
          this.modalShow = false;
        }
      },
      toggle() {
        this.modalShow ? this.hide() : this.show();
      },
      escapeEvent() {
        if (this.escEvt) {
          this.hide();
        }
      },
    },
    mounted() {
      if (this.escEvt) {
        document.onkeydown = (e) => {
          const keyNum = window.event ? e.keyCode : e.which;
          if (keyNum === 27) {
            this.hide();
          }
        };
      }
    }
  }
</script>

<style lang="scss">
  .modal-open {
    overflow: hidden;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $zindex-modal-background;
    background-color: $modal-backdrop-bg;

    &.fade {
      @include opacity(0);
    }
    &.in {
      @include opacity($modal-backdrop-opacity);
    }
  }

  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: $zindex-modal;
    overflow: auto;
    // Prevent Chrome on Windows from adding a focus outline. For details, see
    // https://github.com/twbs/bootstrap/pull/10951.
    outline: 0;
    -webkit-overflow-scrolling: touch;

    &.fade {
      .modal-content {
        transform: translate3d(0, -25%, 0);
      }
    }
    &.in {
      .modal-content {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  .modal-content {
    position: relative;
    border: 1px solid $modal-content-border-color;
    border-radius: $border-radius-lg;
    background-color: $modal-content-bg;
    background-clip: padding-box;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    transition: transform 0.3s ease-out;
    // Remove focus outline from opened modal
    outline: 0;
  }

  @include media-breakpoint-up('sm') {
    .modal-content {
      margin: 30px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    }

    .modal-sm {
      width: $modal-sm;
    }
  }

  @include media-breakpoint-up('md') {
    .modal-lg {
      width: $modal-lg;
    }
  }
</style>