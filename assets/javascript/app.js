/*

only one answer per question
saves responses
when click done or time up
shows score

on click start button
start counter

stop counter
if time runs out

If click right answer
push to right answers array
add up sum of correct answers

If click wrong answer 
push to wrong answers array
add up sum of incorrect answers

if game time out or 

*/


//This section is the code for my first question


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

$("#finished").click(function(){
alert("done!");
})
;


//see all numbers added to array

$(window).load(function(){ 
//setTimeout(function(){ alert("Hello"); }, 3000);
})


/*functions for specific buttons, I know theres an easier way to do this, 
I just haven't figured it out yet*/

$(".wrong1").click(function(){
$('.wrong1').prop('disabled', true);
$('.right1').prop('disabled', true);
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
/*function stopgame(){
  alert("done!");
}

/*function changescore (){
}*/


});