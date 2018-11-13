<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>Tiny Drawer Menu</title>
  
  <link rel="stylesheet" href="assets/css/dist/style.css?time=<?= time(); ?>">
</head>
<body class="template-tag"><div class="top">

<div data-drawer-menu>
  <div data-drawer-backdrop></div>
  <div data-drawer-contents></div>
</div>

<div class="trigger">Menu</div>
<div class="whitespace"></div>
<div class="trigger">Menu</div>

<script src="assets/js/script.js?time=<?= time(); ?>"></script>

<script>
document.addEventListener("DOMContentLoaded", function(event) {
  TinyDrawerMenu.init({
    'selectorTrigger': '.trigger',
    'selectorDrawer': '[data-drawer-menu]'
  });
});
</script>

</body>
</html>