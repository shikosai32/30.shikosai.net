$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();

  var colors = ['red-border', 'green-border', 'blue-border'];
  var rand = colors[Math.floor(Math.random() * 3)];
  $('.table-of-contents').find('a').addClass(rand);
});



$('.collapsible-header').click(function() {
  if($(this).parent().hasClass('active')) {
    $(this).children('.material-icons').text("keyboard_arrow_down");
  } else {
    $(this).children('.material-icons').text("keyboard_arrow_up");
  }
});
$(window).scroll(function() {
  if($(window).scrollTop() >= 800) {
    $('#scroll-to-top').fadeIn(100)
  } else {
    $('#scroll-to-top').fadeOut(100);
  }
});

$('a[href^="#"]').click(function() {
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body, html').animate({scrollTop:position-72}, speed, 'swing');
  return false;
});