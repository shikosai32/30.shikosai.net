$(document).ready(function(){
  $("footer").load("/30/include/footer.html");

  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
  scroll_to_top();

  var colors = ['red-border', 'green-border', 'blue-border'];
  var rand = colors[Math.floor(Math.random() * 3)];
  $('.table-of-contents').find('a').addClass(rand);
});

/* スマホ版で100vhがUIでずれるときの対処法 */
var vh = $(window).innerHeight() * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(window).scroll(function() {
  scroll_to_top();
});

$('.collapsible-header').click(function() {
  if($(this).parent().hasClass('active')) {
    $(this).children('.material-icons').text("keyboard_arrow_down");
  } else {
    $(this).children('.material-icons').text("keyboard_arrow_up");
  }
});

function scroll_to_top () {
  if($(window).scrollTop() > 1200) {
    $('#scroll-to-top').fadeIn(100)
  } else {
    $('#scroll-to-top').fadeOut(100);
  }
};

$('a[href^="#"]').click(function() {
  var headerHeight = $('#nav-mobile').outerHeight();
  var speed = 400;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top - headerHeight;
  $('body, html').animate({scrollTop:position}, speed, 'swing');
  return false;
});