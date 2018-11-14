<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title>Tiny Drawer Menu</title>
  
  <link rel="stylesheet" href="assets/css/dist/style.css?time=<?= time(); ?>">
</head>
<body class="template-tag"><div class="top">

<tdm-component>
  Some menu contents - <div data-tdm-close>Close</div>
</tdm-component>

<div data-tdm-open>Menu</div>
<div class="whitespace"></div>
<div data-tdm-open>Menu</div>

<script src="assets/js/script.js?time=<?= time(); ?>"></script>

<script>
  TinyDrawerMenu.init({
    callback: function(element, action) {
      console.log(element);
      console.log(action);
    }
  });

  TinyDrawerMenu.close();
</script>

<div data-tdm-backdrop></div>

</body>
</html>