$(document).ready(function () {

  $(".paw-logo", ".sable", ".fawn", ".red", '.stone').on("mouseenter mouseleave touchstart", function(e){
    if(e.type == 'touchstart') {
      $(this).off('mouseenter mouseleave');
    }

    $(this).toggleClass("hover");
  });



  }); //end ready
