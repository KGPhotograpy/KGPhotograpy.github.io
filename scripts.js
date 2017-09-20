
console.log("hi");
function start(){
$("#header").attr('style','min-height:+'+($(window).height() +25)+'px');

$("#header").attr('style','min-width:+'+$(window).width()+'px');
}
$( window ).resize(function() {
  $("#header").attr('style','min-height:+'+($(window).height() +100)+'px');

  $("#header").attr('style','min-width:+'+$(window).width()+'px');
}
