# Tiny Drawer Menu

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
<tdm-component>Put your menu here</tdm-component>
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

### Callback

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

## Donate

Donate to [DevoneraAB](https://www.paypal.me/DevoneraAB) if you want.

## License

MIT