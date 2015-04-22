# Meteor Bootstrap Colorpicker

Latest version of [Bootstrap Colorpicker](http://mjolnic.com/bootstrap-colorpicker/) packaged for Meteor.

## Installing

```bash
    meteor add risul:bootstrap-colorpicker
```

## Usage

Template:

```html
<template name="hello">
  <input type="text" class="demo1" value="#5367ce" />
</template>
```

After template is rendered:

```js
Template.hello.rendered = function() {
  $('.demo1').colorpicker();
}
```

## Documentaion

See the official [documentation](http://mjolnic.com/bootstrap-colorpicker/) for more info