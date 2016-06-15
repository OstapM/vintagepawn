$(document).ready(function(){
  console.log('page is loaded');

  $('.mobile-btn').click(function() {
    $('.mobile-menu.sidebar')
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle')
    ;
  });


  $('.tabular.menu .item').tab();

});

$( window ).resize(function() {

});

$(window).scroll(function() {  
  console.log('++');  
  var scroll = $(window).scrollTop();
  var header = $('header').outerHeight();

  if (scroll >= header) {
    $("header").addClass("header--JS");
    $(".start-page").addClass("start-page--JS");
    // $(".start-page").css("padding-top", header);
  } else {
    $("header").removeClass("header--JS");
    // $(".start-page").css("padding-top", 0);
    $(".start-page").removeClass("start-page--JS");
  }
});