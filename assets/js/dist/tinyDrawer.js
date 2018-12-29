class TinyDrawer {
  constructor(options) {
    this.o = Object.assign({}, this.defaults(), options);

    document.addEventListener("DOMContentLoaded", () => {
      this.backdropAdd();

      this.setup();

      this.triggerOpen();
      this.triggerClose();

      this.activeUnset();
    });
  }

  // Defaults
  defaults() {
    return {
      replacement: 'drawer',
      drawerSelector: 'drawer-menu'
    };
  };

  // Setup
  setup() {
    this.elementDrawer = document.querySelector(this.o.drawerSelector);
    this.elementOpen = document.querySelectorAll('[data-' + this.o.replacement + '-open]');
    this.elementClose = document.querySelectorAll('[data-' + this.o.replacement + '-backdrop], [data-' + this.o.replacement + '-close]');
  };

  // Trigger open
  triggerOpen() {
    this.elementOpen.forEach((element) => {
      element.addEventListener('click', (e) => {
        this.open(e.target);
      });
    });
  };

  // Trigger close
  triggerClose() {
    this.elementClose.forEach((element) => {
      element.addEventListener('click', (e) => {
        this.close();
      });
    });
  };

  // Active unset
  activeUnset() {
    document.body.dataset[this.o.replacement] = '';
  };

  // Active set
  activeSet() {
    document.body.dataset[this.o.replacement] = true;
  };

  // Offset top to variable
  offsetTopToVariable() {
    var offsets = document.body.getBoundingClientRect();
    this.top = -offsets.top;
  };

  // Open
  open(element = null) {
    this.activeSet();
    this.offsetTopToVariable();
    this.callback(element);
  };

  // Close
  close(element = null) {
    this.activeUnset();
    window.scrollTo(0, this.top);
    this.callback(element);
  };

  // Backdrop add
  backdropAdd() {
    let backdrop = document.createElement('div');
    backdrop.dataset[this.o.replacement + 'Backdrop'] = '';

    document.body.appendChild(backdrop);
  };

  // Callback init
  callback(element) {
    if(typeof this.o.callback == 'undefined') return;
    if(element === null) return;

    var action = "drawerOpen" in element.dataset ? 'open' : 'close';

    this.o.callback(element, action);
  };
}

function tinyDrawer(args) {
  new TinyDrawer(args);
}