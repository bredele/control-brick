# control-brick

  [Lego](https://github.com/bredele/lego) plugin to toggle or radio any dom elements. Useful to create
  tab-based navigation bar, toolbar, etc. 

## Installation

with [component](http://github.com/component/component):

    $ component install bredele/control-brick

with [nodejs](http://nodejs.org):

    $ component install control-brick

## Usage

First, add the plugin to your view (see [lego](https://github.com/bredele/lego) to know more about views):

```js
var controller = require('control-brick')({
	handler : function() {
	  //do something
  }
});
view.add('data-control', controller);
```

## Basic

radio:

```html
<nav class="toolbar" data-control="radio:click .menu, handler">
	<button class="menu">Menu 1</button>
	<button class="menu">Menu 2</button>
	<button></button>
<nav>
```
Add `active` class to the clicked button (with the class `menu`).
Only one button can be 'active' at a time.

toggle:

```html
<ul class="list" data-control="toggle:click .link, handler">
	<li class="link"></li>
	<li></li>
<ul>
```
Toggle `active` class to the clicked link (with the class `link`).
Serveral links can be 'active' at the same time.

  `Control` uses [events-brick](http://github.com/bredele/events-brick) and inherits its behaviour.

see [live example](https://github.com/bredele/control-brick/tree/master/example)

## Advanced

You can change the class applied to your radio/toggle elements (`active` is the default class):

```html
<nav class="toolbar" data-control="radio:click .menu, clicked handler">
	<button class="menu">Menu 1</button>
	<button class="menu">Menu 2</button>
	<button></button>
<nav>
```
Add `clicked` class to the clicked button 

## License

  MIT
