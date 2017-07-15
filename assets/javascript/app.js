/*
Round 1 Question 1 Pseudocode
-On page load, round1 div appears which holds the first question and its answers
-Right and wrong answers are preselected
-If user clicks right answer, they continue living
-If user clicks wrong answer, one step closer to death

Question 1 function, on click, if user selects the right answer
alert them that they are right, add a point to win score
if user selects the wrong answer, alert them that they are wrong
and add point to lose score

set event listeners for choices connecting to li divs in html, connect 
those divs to a function through an event listener(on click event)
*/

/*var rightAnswer;
var wrongAnswer;
var wins = 0;
var losses = 0;
var hasBeenClicked = false;*/

//This section is the code for my first question

var rightAnswer;
var wrongAnswer;
var wins = 0;
var losses = 0;
var hasBeenClicked = false;

//This section is the code for my first question

$(document).ready(function() {

$("wronganswer1.1").on('click', loss);
 //   hasBeenClicked = true;
//$("rightanswer1.1").on('click', Q1changescore);

});

function loss(){
  //if ("wronganswer1.1" + hasBeenClicked){
    console.log("You are wrong");
  }


