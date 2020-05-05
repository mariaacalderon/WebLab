$(document).ready(function(){
$("#pagepiling").pagepiling();

//write here:

$(".box1").mouseover(function(){
    $(".orangeC").css("color", "blue");
});

$(".box1").mouseleave(function() {
  $(".orangeC").css("color", "white");
});



});
