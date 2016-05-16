var animateHeader = (function() {
  var docElem = document.documentElement,
    header = document.querySelector( '.header' ),
    didScroll = false,
    changeHeaderOn = 190;

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
