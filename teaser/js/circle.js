var circleSort = new List(
  'circle-list-wrapper', 
  {valueNames: [ 'kind', 'name', 'owner', 'location', 'description' ]}
);

$('.sort').click(function() {
  $('.sort').not($(this)).find('.material-icons').text("");
  if($(this).hasClass('asc')) {
    $(this).find('.material-icons').text("arrow_upward");
  } else if ($(this).hasClass('desc')) {
    $(this).find('.material-icons').text("arrow_downward");
  }
});

$('#search-bar').on('input', function(event) {
  setTimeout(function() {
    if($('#circle-list').find('tbody').html() == '') {
      $('#circle-list').hide()
      $('#search-empty').show()
    } else {
      $('#circle-list').show();
      $('#search-empty').hide();
    };
  }, 300);
});

$('td.location').click(function() {
  var imgSrc = "/30/images/circle-map/" + $(this).attr('data-loc') + '.jpg';
  var mapElem =  '<img src="' + imgSrc + '" class="z-depth-1" id="highlight-img" alt="' + imgSrc + '">';
  if($('#highlight-img').length) {
    $('#map-highlight').hide();
    $('#highlight-img').attr('src', imgSrc);
    $('#map-highlight').fadeIn(200);
  } else {
    $('#map-highlight').prepend(mapElem).hide().fadeIn(200);
  }
});

$('#highlight-close').click(function() {
  $('#map-highlight').fadeOut(200);
  setTimeout(function() {
    $('#highlight-img').remove();
  }, 200);
});