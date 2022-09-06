let playerOne = "Player 1";
let playerTwo = "Player 2";

$(".edit").click(function () {
  playerOne = prompt("Change Player 1 name");

  if (playerOne) {
    $(".player--one").html(playerOne);
  } else {
    $(".player--one").html;
  }

  playerTwo = prompt("Change Player 2 name");

  if (playerTwo) {
    $(".player--two").html(playerTwo);
  } else {
    $(".player--two").html;
  }
});

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImage1 = "images/dice" + randomNumber1 + ".png";
let randomImage2 = "images/dice" + randomNumber2 + ".png";

$(".play").click(function () {
  $(".img1").attr("src", randomImage1);
  $(".img2").attr("src", randomImage2);
  if (randomNumber1 > randomNumber2) {
    $("h1").html("🚩" + playerOne + " Wins!");
  } else if (randomNumber2 > randomNumber1) {
    $("h1").html(playerTwo + " Wins!🚩");
  } else {
    $("h1").html("Draw!");
  }
});
