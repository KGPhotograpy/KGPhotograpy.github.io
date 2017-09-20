
console.log("hi");
function start(){
  console.log("width:"+$(window).width()+ "height:"+$(window).height());


$("#header").attr('style','max-width:'+$(window).width()+'px;height:'+$(window).height() +'px');

}
$(window).resize(function() {
start();
});
