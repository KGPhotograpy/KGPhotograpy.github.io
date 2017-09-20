
console.log("hi");
function start(){
$("#header").attr('style','min-height:+'+($(window).height() +25)+'px');

$("#header").attr('style','min-width:+'+$(window).width()+'px');
$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 1000
});
}
$(window).resize(function() {
  $("#header").attr('style','min-height:+'+($(window).height() +100)+'px');
  $("#header").attr('style','min-width:+'+$(window).width()+'px');
});
$(document).ready(function(){
  $('ul.first').bsPhotoGallery({
    "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
    "hasModal" : true
  });
});
