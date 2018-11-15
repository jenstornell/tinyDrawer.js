var TinyDrawerMenu = (function () {
  var fn = {};

  fn.init = function(options) {
    fn.options = options = Object.assign({}, fn.defaults(), options);

    document.addEventListener("DOMContentLoaded", function(event) {
      fn.setup();

      fn.triggerOpen();
      fn.triggerClose();
    });
  };

  // Defaults
  fn.defaults = function() {
    return {
      replacement: 'tdm'
    };
  };

  // Setup
  fn.setup = function() {
    fn.elementDrawer = document.querySelector('nav-' + fn.options.replacement);
    fn.elementOpen = document.querySelectorAll('[data-' + fn.options.replacement + '-open]');
    fn.elementClose = document.querySelectorAll('[data-' + fn.options.replacement + '-backdrop], [data-' + fn.options.replacement + '-close]');
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
    delete document.body.dataset[fn.options.replacement];
  };

  // Active set
  fn.activeSet = function() {
    document.body.dataset[fn.options.replacement] = true;
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

  // Callback init
  fn.callback = function(element) {
    if(typeof fn.options.callback == 'undefined') return;
    if(element === null) return;

    var action = "tdmOpen" in element.dataset ? 'open' : 'close';

    fn.options.callback(element, action);
  };

  return fn;
})();