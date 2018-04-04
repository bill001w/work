export function transitionEnd() {
  let el = document.createElement('bootstrap');
  const transEndEventNames = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };

  for (let name in transEndEventNames) {
    if (el.style[name] !== undefined) {
      return transEndEventNames[name];
    }
  }

  return false;
}

// 强制触发一次
export function emulateTransitionEnd(dom, duration) {
  let called = false;
  let transitionEndValue = transitionEnd();
  let changeCalled = function () {
    called = true;
  };
  let callback = function () {
    if (!called) {
      let event = new Event(transitionEndValue);
      dom.dispatchEvent(event);

      dom.removeEventListener(transitionEndValue, changeCalled);
    }
  };

  dom.addEventListener(transitionEndValue, changeCalled);

  setTimeout(callback, duration);
}
