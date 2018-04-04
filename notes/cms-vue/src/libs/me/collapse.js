import {emulateTransitionEnd, transitionEnd} from './transition';

const Collapse = function (elem, options) {
  this.elem = elem;
  this.options = Object.assign({}, Collapse.DEFAULTS, options);
  this.transitioning = false;
};

Collapse.DEFAULTS = {
  dimension: 'height'
};

Collapse.prototype.show = function () {
  if (this.transitioning || this.elem.classList.contains('in')) return;

  let dimension = this.options.dimension;
  let scrollSize = 'scroll' + dimension.slice(0, 1).toUpperCase().concat(dimension.slice(1));
  let _complete = () => {
    this.elem.classList.remove('collapsing');
    this.elem.classList.add('collapse');
    this.elem.classList.add('in');

    this.elem.removeEventListener(transitionEnd(), _complete);
    this.transitioning = false;

    return false;
  };

  this.transitioning = true;
  this.elem.style[dimension] = 0;
  this.elem.classList.remove('collapse');
  this.elem.classList.add('collapsing');
  this.elem.style[dimension] = this.elem[scrollSize] + 'px';

  if (transitionEnd()) {
    this.elem.addEventListener(transitionEnd(), _complete);

    emulateTransitionEnd(this.elem, 350);
  } else {
    _complete();
  }
};

Collapse.prototype.hide = function () {
  if (this.transitioning || !this.elem.classList.contains('in')) return;

  let dimension = this.options.dimension;
  let _complete = () => {
    this.elem.classList.remove('collapsing');
    this.elem.classList.add('collapse');
    this.elem.style[dimension] = '';

    this.transitioning = false;
    this.elem.removeEventListener(transitionEnd(), _complete);

    return false;
  };

  this.transitioning = true;
  // width/height必须先预设，否则tansition无效
  this.elem.style[dimension] = this.elem.offsetHeight + 'px';
  this.elem.classList.remove('collapse');
  this.elem.classList.remove('in');
  this.elem.classList.add('collapsing');
  this.elem.clientWidth;
  this.elem.style[dimension] = 0 + 'px';
  if (transitionEnd()) {
    this.elem.addEventListener(transitionEnd(), _complete);

    emulateTransitionEnd(this.elem, 350);
  } else {
    _complete();
  }
};

Collapse.prototype.toggle = function () {
  this[this.elem.classList.contains('in') ? 'hide' : 'show']();
};

export default Collapse;