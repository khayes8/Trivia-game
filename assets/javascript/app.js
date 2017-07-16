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

There is a previous button and a next button to toggle from one page
to the next. 
when user clicks next button, previous question dissapears

*/


//This section is the code for my first question


var questions = {}
var wins = 0;
var losses = 0;


$(document).ready(function() {


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

function nextquestion(){
  var question1 = document.getElementByClassName('round1');
  if (question1.style.display === 'none') {
        question1.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function changescore (){

}

});
