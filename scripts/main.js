var animateHeader = (function() {
  var docElem = document.documentElement,
    header = document.querySelector( '.header' ),
    didScroll = false,
    changeHeaderOn = 170;

  function init() {
    window.addEventListener( 'scroll', function () {
     if ( !didScroll ) {
       didScroll = true;
       setTimeout( scrollPage, 250 );
     }
    }, false );
  }

  function scrollPage() {
    var sy = scrollY();
    if ( sy >= changeHeaderOn ) {
      header.classList.add( 'header--shrink' );
    } else {
      header.classList.remove( 'header--shrink' );
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();

})();

function toggleMenu() {
    var menuBtn = document.querySelector( '.header__nav_icon' );
    var menu = document.querySelector( '.header__nav_container' );

    menuBtn.classList.toggle( 'active' );
    menu.classList.toggle( 'active' );
};
