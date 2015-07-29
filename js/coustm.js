

$(document).ready(function(){
  $(function(){
   var shrinkHeader = 80;
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
             $('.navbar-default').addClass('shrink');
          }
          else {
              $('.navbar-default').removeClass('shrink');
          }
    });
  function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
      }
  });
});
