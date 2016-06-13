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

  if (scroll >= 175) {
    $("header").addClass("header--JS");
    $(".start-page").addClass("start-page--JS");
  } else {
    $("header").removeClass("header--JS");
    $(".start-page").removeClass("start-page--JS");
  }
});