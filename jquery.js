$(document).ready(function () {

  $(".paw-logo").on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("hover");
  });

  }); //end ready
