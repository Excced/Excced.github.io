var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userpattern = [];
var randomColor;
var randomNo;
var buttonId;
var started = false;
var level=0;


// keyboared press start the game
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level 0");
    nextsequence();
    started = true;
  }
});

// sequence generation

function nextsequence() {
userpattern = [];
  level++;
  $("#level-title").text("Level "+level);
  randomNo = Math.random();
  randomNo = Math.floor(randomNo * 4);
  randomColor = buttonColor[randomNo];
  buttonId = "#" + randomColor;
  gamePattern.push(randomColor);
  $(buttonId).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomColor);


}

// user click


  $(".btn").click(function(event) {
    var clickedButton = this.id;
    // add press class
    $("#" + clickedButton).addClass("pressed");

    // remove pressed class
    setTimeout(function() {
      $("#" + clickedButton).removeClass("pressed");
    }, 100);
    playsound(clickedButton);
    userpattern.push(clickedButton);
    checkAnswer(userpattern.length-1);

  });


function checkAnswer(index)
{

  if(userpattern[index]===gamePattern[index])
  {
   if(userpattern.length===gamePattern.length)
   {
    setTimeout(function(){
      nextsequence();
    },1000);
}
  }
  else{
    playsound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    startover();
  }
}

// sound play
function playsound(randomColor) {
  var audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();
}

function startover()
{
  started=false;
  level = 0;
  gamePattern = [];
}
