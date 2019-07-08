# Bulma Navbar Fix / Unfix

I confess I hadn't heard of **Bulma** until a few days ago when I began experimenting with the Base-2018 theme that is now used with Bolt. Looks great, but I had problems with the fixed navbar because the 'burger' menu won't scroll, and the Android keyboard covers several of the menu items, including the search box.

* https://bulma.io/
* https://bolt.cm/

>There's also the issue of the page footer that doesn't quite attach itself to the bottom of the window - unless there is sufficient page >content to push it all the way down. The link below sorted that out in a few seconds! :-)
>* https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/

### Navbar

The following is a quick-fix in jQuery. When the 'burger' menu is open, the screen scrolls (fast) to the top and the navbar becomes un-fixed, allowing the menu to scroll freely. When the 'burger' menu is closed, the navbar becomes fixed to the top once more.

```javascript
$(document).ready(function() {

// Un-fix navbar when burger menu is open
  $('#hamburger').click(function() {
    if ( $('#navbar').hasClass('is-fixed-top') ) {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      $('#navbar').removeClass('is-fixed-top');
    } else {
      $('#navbar').addClass('is-fixed-top');
    };    
  });

});
```

### HTML

I added IDs to the navbar and burger, although it's not strictly speaking necessary. You could base your IF statement on a selector such as:

`if ( $("nav[class*='navbar']").hasClass('is-fixed-top') )`

But, the previous solution seemed easier to read. In the `/partials/_navbar.twig` file, I made the following changes:

```html
{# Navbar #}
<nav id="navbar" class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
...
<span id="hamburger" class="navbar-burger" data-target="navbar-toggle">
```
