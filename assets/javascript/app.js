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

$(document).ready(function() {

});
$(".wrong").click(function(){
    losses++;
    $(".loss").html(losses);
  })
;

$(".right").click(function(){
  wins++;
  $(".win").html(wins);
})
;

$(window).load(function(){ 
setTimeout(function(){ alert("Hello"); }, 3000);
})
/*function stopgame(){
  alert("done!");
}

/*function changescore (){
}*/


