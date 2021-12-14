var colors = ["green", "red", "yellow", "blue"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var gameStart = false;
var gameOver = false;
// var levelCheck = 0;

$(document).keydown(startGame);

// any time the user clicks a button, this gets called
// therefore, since the user needs to click all the buttons in the sequence,
// we can't do a check of the entire sequence in one click
// we need to compare one choice at a time to the sequence
// so... userchoice[0] === gamePattern[o]? userchoice[1] === gamePattern[1]?
$(".btn").click(function(event) {
  userChosenColor = this.id;
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  console.log("Entire User Clicked Pattern: " + userClickedPattern);
  playSound(userChosenColor);
  console.log("Level: " + level);
  // checkAnswer(levelCheck);
  console.log("Current User Click: " + userClickedPattern.length);
  checkAnswer(userClickedPattern.length);
});

function checkAnswer(currentLevel) {
  // for (var i = 0; i < gamePattern.length; i++) {
    // if (userClickedPattern[i] !== gamePattern[i]) {
    if (userClickedPattern[currentLevel-1] == gamePattern[currentLevel-1]) {
      // levelCheck++;
      // setTimeout(nextSequence(), 1000);
      console.log("success");
      // setTimeout(nextSequence(), 200);
      // gameOver = false;
    } else {
      console.log("wrong")
      gameOver = true;
      $("h1#level-title").text("GAME OVER!");
      // resetGame();
    }
  // }
  // if (gameOver == false && levelCheck == level) {
  if (gameOver == false && currentLevel == gamePattern.length) {
    level++;
    // levelCheck = 0;
    userClickedPattern = [];
    setTimeout(nextSequence(), 1000);
    // nextSequence();
  }
}
// function resetGame() {
//   userClickedPattern = [];
//   gamePattern = [];
//   level = 0;
//   gameStart = true;
//   gameOver = false;
//   levelCheck = 0;
//   $("h1#level-title").text("Level 0");
// }

function startGame() {
  if (gameStart == false) {
    // console.log(level);
    nextSequence();
    $("h1#level-title").text("Level 0");
    // console.log(level);
    gameStart = true;
  }

}

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4); //console.log(randomNumber;
  var randomChosenColor = colors[randomNumber]; // console.log(randomChosenColor);
  $("#" + randomChosenColor + ".btn").fadeOut(150).fadeIn(150);
  playSound(randomChosenColor);
  $("h1#level-title").text("Level " + level);
  gamePattern[level] = randomChosenColor;
  console.log(level);
  // level++;
}

function playSound(colorName) {
  var colorSound = new Audio("sounds/" + colorName + ".mp3");
  colorSound.play();
}

function animatePress(currentColor) {
  $("#" + currentColor + ".btn").addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor + ".btn").removeClass("pressed");
  }, 100);
}


// function handleClick(event) {
//   var userChosenColor = "";
// }


// $("#" + randomChosenColor).
// $("#" + randomChosenColor + ".btn").css("background-color","white");
// $("#" + randomChosenColor + ".btn").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
