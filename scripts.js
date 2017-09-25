
console.log("hi");

function start(){
  console.log("width:"+$(window).width()+ "height:"+$(window).height());
var myDiv = $("#header");
var src ="https://firebasestorage.googleapis.com/v0/b/brigade-929f9.appspot.com/o/headerimg.jpg?alt=media&token=880fe805-1914-40e2-9641-2223fbc92736";

    var downloadingImage = new Image();
    downloadingImage.onload = function(){
        image.src = this.src;

    };
    downloadingImage.src = "https://firebasestorage.googleapis.com/v0/b/brigade-929f9.appspot.com/o/headerimg.jpg?alt=media&token=880fe805-1914-40e2-9641-2223fbc92736";

$("#header").attr('style','max-width:'+$(window).width()+'px;height:'+$(window).height() +'px;');

}
$(document).ready(function () {

});



$(window).resize(function() {
start();
});
