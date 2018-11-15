var TinyDrawer = (function () {
  var fn = {};
  var o = {};

  fn.init = function(options) {
    o = Object.assign({}, fn.defaults(), options);

    console.log(o);

    document.addEventListener("DOMContentLoaded", function(event) {
      fn.backdropAdd();
      fn.setup();

      fn.triggerOpen();
      fn.triggerClose();
    });
  };

  // Defaults
  fn.defaults = function() {
    return {
      replacement: 'drawer',
      drawerSelector: 'drawer-menu'
    };
  };

  // Setup
  fn.setup = function() {
    fn.elementDrawer = document.querySelector(o.drawerSelector);
    fn.elementOpen = document.querySelectorAll('[data-' + o.replacement + '-open]');
    fn.elementClose = document.querySelectorAll('[data-' + o.replacement + '-backdrop], [data-' + o.replacement + '-close]');
  };

  // Trigger open
  fn.triggerOpen = function() {
    for(i=0; i<fn.elementOpen.length; i++) {
      fn.elementOpen[i].addEventListener('click', fn.open.bind(null, fn.elementOpen[i]), false);
    }
  };

  // Trigger close
  fn.triggerClose = function() {
    for(i=0; i<fn.elementClose.length; i++) {
      fn.elementClose[i].addEventListener('click', fn.close.bind(null, fn.elementClose[i]), false);
    }
  };

  // Active unset
  fn.activeUnset = function() {
    delete document.body.dataset[o.replacement];
  };

  // Active set
  fn.activeSet = function() {
    document.body.dataset[o.replacement] = true;
  };

  // Offset top to variable
  fn.offsetTopToVariable = function() {
    var offsets = document.body.getBoundingClientRect();
    fn.top = -offsets.top;
  };

  // Open
  fn.open = function(element = null) {
    fn.activeSet();
    fn.offsetTopToVariable();
    fn.callback(element);
  };

  // Close
  fn.close = function(element = null) {
    fn.activeUnset();
    window.scrollTo(0, fn.top);
    fn.callback(element);
  };

  // Backdrop add
  fn.backdropAdd = function() {
    let backdrop = document.createElement('div');
    backdrop.dataset[o.replacement + 'Backdrop'] = '';

    document.body.appendChild(backdrop);
  };

  // Callback init
  fn.callback = function(element) {
    if(typeof o.callback == 'undefined') return;
    if(element === null) return;

    var action = "drawerOpen" in element.dataset ? 'open' : 'close';

    o.callback(element, action);
  };

  return fn;
})();