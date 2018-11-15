# Tiny Drawer Menu

*Version 1.1*

## In short

- Bloat free.
- 1kb in filesize.
- Vanilla js, with no dependencies.
- Dead simple setup.
- It will remember your scroll position when closing the menu.
- Callback support.

![Screenshot](screenshot.gif)

*The real thing is much smoother than this animated gif*

## Usage

It just can't get any simpler than this.

### CSS

```html
<link rel="stylesheet" href="assets/css/dist/core.min.css">
```

### HTML

```html
<nav-tdm>Put your menu here</nav-tdm>
<div data-tdm-open>Trigger to open menu</div>
```

### JS

```html
<script>
TinyDrawerMenu.init();
</script>
```

## Options

### replacement

To prevent possible collision with other scrips you can set your own replacement part. By default it's set to `tdm` (as in Tiny Drawer Menu).

```js
TinyDrawerMenu.init({
  'replacement': 'tdm'
});
```

*Be aware! If you change the replacement, you also need to match it in the css file.*

### callback

If you need to trigger other actions when the menu state changes, you can use a callback.

- `element` is the element that triggered the change.
- `action` is `open` or `close` depending on what happends.

```js
TinyDrawerMenu.init({
  callback: function(element, action) {
    console.log(element);
    console.log(action);
  }
});
```

## Methods

### open

If you need to programmically trigger the menu to open you can use this method.

```js
TinyDrawerMenu.open();
```

### close

If you need to programmically trigger the menu to close you can use this method.

```js
TinyDrawerMenu.close();
```

## Other information

### How to style it

The important CSS that is needed for the component to work is put directly on the data attributes and the custom elements. However, if you want to add additional CSS to it, it's highly recommended to add a class to that element to separate the core CSS from the custom CSS.

### Why the use of data attributes

While classes or ids could be used for actions, I use data attributes instead. That way you can add your own classes that you can style separated from the logic.

### Why the use of custom elements

I could use a div with an id but all major browsers now supports custom elements. To make it really visible that it is a component, it's a custom element and not just a div.

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT