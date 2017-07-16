var wins = 0;
var losses = 0;
var wrongAnswers = [];
var rightAnswers = [];

$(document).ready(function() {



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

});
//This is the code that generates the win and loss score when user clicks a button



$(window).load(function(){ 
 // window.setTimeout(GameOver, 30000);
})
/*On window load, the timer is automatically set to
enact the GameOver function at 30 seconds*/



function GameOver(){
$('.right').prop('disabled', true);
$('.wrong').prop('disabled', true);
alert("GAME OVER");
}
/*When the game over function is enacted,
all of the right and wrong buttons are disabled
so the user can no longer click anything and he 
or she gets an alert that the game is over*/



$("#finished").click(function(){
$('.wrong').prop('disabled', true);
$('.right').prop('disabled', true);
alert("GAME OVER");
  })
;
/*When the user clicks the finished buttton,
it is going to disable all of the wrong and right buttons
and alert the user that the game is over */





/*This section basically says that when a user
clicks on one button in a question, both buttons 
will be disabled. The buttons are broken down into
classes with wrong and right labeled with numbers
so that when a user click a wrong answer, all the 
wrong answers aren't deactived. Just that specific one.*/

//Question 1
$(".wrong1").click(function(){
$(".wrong1").prop('disabled', true);
$(".right1").prop('disabled', true);
  })
;
$(".right1").click(function(){
$('.right1').prop('disabled', true);
$('.wrong1').prop('disabled', true);
  })
;

//2
$(".wrong2").click(function(){
$('.wrong2').prop('disabled', true);
$('.right2').prop('disabled', true);
  })
;
$(".right2").click(function(){
$('.right2').prop('disabled', true);
$('.wrong2').prop('disabled', true);
  })
;

//Question 3
$(".wrong3").click(function(){
$('.wrong3').prop('disabled', true);
$('.right3').prop('disabled', true);
  })
;

$(".right3").click(function(){
$('.right3').prop('disabled', true);
$('.wrong3').prop('disabled', true);
  })
;

//Question 4
$(".wrong4").click(function(){
$('.wrong4').prop('disabled', true);
$('.right4').prop('disabled', true);
  })
;
$(".right4").click(function(){
$('.right4').prop('disabled', true);
$('.wrong4').prop('disabled', true);
  })
;

//Question 5

$(".wrong5").click(function(){
$('.wrong5').prop('disabled', true);
$('.right5').prop('disabled', true);
  })
;
$(".right5").click(function(){
$('.right5').prop('disabled', true);
$('.wrong5').prop('disabled', true);
  })
;

//Question 6
$(".wrong6").click(function(){
$('.wrong6').prop('disabled', true);
$('.right6').prop('disabled', true);
  })
;
$(".right6").click(function(){
$('.right6').prop('disabled', true);
$('.wrong6').prop('disabled', true);
  })
;


