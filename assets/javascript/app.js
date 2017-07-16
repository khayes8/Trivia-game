var wins = 0;
var losses = 0;
var wrongAnswers = [];
var rightAnswers = [];

$(document).ready(function() {


//This is the code that generates the win and loss score when user clicks a button
$(".wrong").click(function(){
    losses++;
    $(".loss").html(losses);
    wrongAnswers.push(losses);
    console.log(wrongAnswers);
  })
;

$(".right").click(function(){
  wins++;
  $(".win").html(wins);
  rightAnswers.push(wins);
  console.log(rightAnswers);  
})
;

//This code sets the
$(window).load(function(){ 
 // window.setTimeout(GameOver, 30000);
})

function GameOver(){
$('.right').prop('disabled', true);
$('.wrong').prop('disabled', true);
alert("GAME OVER");
}




$("#finished").click(function(){
$('.wrong').prop('disabled', true);
$('.right').prop('disabled', true);
alert("GAME OVER");
  })
;


/*functions for specific buttons, I know theres an easier way to do this, 
I just haven't figured it out yet*/

$(".wrong1").click(function(){
$(".wrong1").prop('disabled', true);
$(".right1").prop('disabled', true);
  })
;

$(".wrong2").click(function(){
$('.wrong2').prop('disabled', true);
$('.right2').prop('disabled', true);
  })
;


$(".wrong3").click(function(){
$('.wrong3').prop('disabled', true);
$('.right3').prop('disabled', true);
  })
;

$(".wrong4").click(function(){
$('.wrong4').prop('disabled', true);
$('.right4').prop('disabled', true);
  })
;

$(".wrong4").click(function(){
$('.wrong4').prop('disabled', true);
$('.right4').prop('disabled', true);
  })
;

$(".wrong5").click(function(){
$('.wrong5').prop('disabled', true);
$('.right5').prop('disabled', true);
  })
;

$(".wrong6").click(function(){
$('.wrong6').prop('disabled', true);
$('.right6').prop('disabled', true);
  })
;

$(".right1").click(function(){
$('.right1').prop('disabled', true);
$('.wrong1').prop('disabled', true);
  })
;

$(".right2").click(function(){
$('.right2').prop('disabled', true);
$('.wrong2').prop('disabled', true);
  })
;

$(".right3").click(function(){
$('.right3').prop('disabled', true);
$('.wrong3').prop('disabled', true);
  })
;

$(".right4").click(function(){
$('.right4').prop('disabled', true);
$('.wrong4').prop('disabled', true);
  })
;

$(".right4").click(function(){
$('.right4').prop('disabled', true);
$('.wrong4').prop('disabled', true);
  })
;

$(".right5").click(function(){
$('.right5').prop('disabled', true);
$('.wrong5').prop('disabled', true);
  })
;

$(".right6").click(function(){
$('.right6').prop('disabled', true);
$('.wrong6').prop('disabled', true);
  })
;

/*function stopgame(){
  alert("done!");
}

/*function changescore (){
}*/


});