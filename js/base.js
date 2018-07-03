$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.materialboxed').materialbox();
  scrollCond(false);
});

$(window).scroll(function() {
  scrollCond(true);
});

function scrollCond(anim) {
  nav = $('#navbar');
  if($(window).scrollTop() <= $(window).height()) {
    nav.addClass('unscrolled');
    if(anim) {
      nav.addClass('anim');
    } else {
      nav.removeClass('anim');
    }
  } else {
    nav.removeClass('unscrolled');
    if(anim) {
      nav.addClass('anim');
    } else {
      nav.removeClass('anim');
    }
  }
}