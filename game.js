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
    if (userClickedPattern[currentLevel-1] == gamePattern[currentLevel-1]) {
      console.log("success");
    } else {
      var wrongSound = new Audio("sounds/wrong.mp3");
      wrongSound.play();
      console.log("wrong")
      gameOver = true;
      $("h1#level-title").text("GAME OVER!");
      setTimeout(resetGame, 5000);
      // resetGame();
    }
  if (gameOver == false && currentLevel == gamePattern.length) {
    level++;
    userClickedPattern = [];
    setTimeout(nextSequence, 1000);
  }
}
function resetGame() {
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  gameStart = true;
  gameOver = false;
  // levelCheck = 0;
  $("h1#level-title").text("Level 0");
}

function startGame() {
  if (gameStart == false) {
    resetGame();
    console.log("Game over: " + gameOver);
    nextSequence();
    // gameStart = true;
  }
  if (gameOver == true) {
    // $("h1#level-title").text("GAME OVER!");
    // resetGame();
    // setTimeout(resetGame, 5000);
    // $(document).keydown(function(event) {
    //   console.log(event.key);
    //   $(".title").text(textString);
    //   i++;
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
  console.log(randomChosenColor);
  console.log(gamePattern[level]);
  console.log("Game over: " + gameOver);
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
