$(document).ready(function(){  //        <----- it was from this one.



$(".picCookies div:nth-child(2)").hide(); //I hide this one from the beginning. when the page loads!!!!
$(".directions").hide();  //I hide this one from the beginning. when the page loads!!!!
$(".ingredients").hide();

  $("#button1").click(function(){
    $(".picCookies div:first-child").toggle(); // if its there, hide it.  This one is showing from the beginning!!
    $(".picCookies div:nth-child(2)").toggle(); //it its hidden, show it
  });

$("#_directions").click(function(){
    $(".directions").toggle(); //toggle it
});

$("#ingredients").mouseover(function(){
  $(".ingredients").css("color", "darkblue");
});

$("#ingredients").click(function(){
  $(".ingredients").toggle();
});

$("#ingredients").mouseleave(function(){
  $(".ingredients").html("Try me!");
});


});





// This is an example

//        $("footer").mouseover(function(){
//           $("footer p").css("color", "blue");
//        });
//
//        $("footer").mouseleave(function(){
//           $("footer p").html("Don't go!!");
//        });




 // This one was missing
