
console.log("hi");

function start(){
  $('.placeholder').each(function(i, obj) {
    var imgLarge = new Image();
    imgLarge.src = obj.dataset.large;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
    };
    obj.appendChild(imgLarge);
});
$('.img-small').each(function(i, obj) {
  var img = new Image();
  img.src = obj.src;
  img.onload = function () {
   obj.classList.add('loaded');
  };
});

  console.log("width:"+$(window).width()+ "height:"+$(window).height());

$("#head").attr('style','max-width:'+$(window).width()+'px;height:'+$(window).height() +'px;');

}
$(document).ready(function () {

});



$(window).resize(function() {
start();
});
