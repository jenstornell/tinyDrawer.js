var TinyDrawerMenu = (function () {
  var fn = {};

  fn.init = function(options) {
    console.log('test');
    fn.options = options;

    fn.setup();

    fn.triggerOpen();
    fn.triggerClose();
  };

  fn.setup = function() {
    fn.elementDrawer = document.querySelector(fn.options.selectorDrawer);
    fn.elementBackdrop = document.querySelector('[data-drawer-backdrop]');
  };

  fn.triggerOpen = function() {
    var elements = document.querySelectorAll(fn.options.selectorTrigger);
    for(i=0; i<elements.length; i++) {
      var element = elements[i];
      element.addEventListener('click', fn.open.bind(null), false);
    }
  };

  fn.triggerClose = function() {
    fn.elementBackdrop.addEventListener('click', fn.close.bind(null), false);
  };

  fn.close = function() {
    delete fn.elementDrawer.dataset.drawerActive;
    delete document.body.dataset.tinyDrawer;
    window.scrollTo(0, fn.top);
  };

  fn.open = function() {
    fn.elementDrawer.dataset.drawerActive = true;
    document.body.dataset.tinyDrawer = true;

    var offsets = document.body.getBoundingClientRect();

    fn.top = -offsets.top;
    console.log(fn.top);
  };

  return fn;
})();