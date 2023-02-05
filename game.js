var playerChoose = [];
var opponentChoose = [];
var yourScore = 0;
var opponentScore = 0;
var play = ["scissors","paper","rock"];
var gameStart = false;

function gameplay(){
  playerChoose = []
  var x = Math.floor(Math.random()*3)
  opponentChoose[0] = play[x];
}

$(document).keydown(function(event){
  $(".titles").text("Pick Your hand !");
  $(".yourscore").text("Your Score : " + yourScore);
  $(".opponentscore").text("Bot Score : " + opponentScore);
  $("h2").text("");
  gameplay();
})

$(".btn").on("click", function(){
  var buttonPress = $(this);
  buttonPress.addClass("pressed");
  setTimeout(function(){
    buttonPress.removeClass("pressed");
  }, 500);
  playerChoose[0] = buttonPress.attr("id")
  decider()
});

function decider(){
  if(opponentChoose.length == playerChoose.length){
    if(opponentChoose[0] == playerChoose[0]){
      $(".titles").text("Bot Choose " + opponentChoose[0] +  ", Draw !");
    } else if ((opponentChoose[0] == "scissors" && playerChoose[0] == "rock") ||
      (opponentChoose[0] == "rock" && playerChoose[0] == "paper") ||
      (opponentChoose[0] == "paper" && playerChoose[0] == "scissors")) {
      $(".titles").text("Bot Choose " + opponentChoose[0] +  ", You Win !");
      yourScore++;
    } else {
      $(".titles").text("Bot Choose " + opponentChoose[0] +  ",You Lose !");
      opponentScore++;
    }
    $('h2').text("Press Any Key to Play Again");
  }
}
