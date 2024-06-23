let cardImgs = [
  { path: "./img/apple-img.png", tag: 0 },
  { path: "./img/banana-img.png", tag: 1 },
  { path: "./img/pineapple-img.png", tag: 2 },
  { path: "./img/watermelon-img.png", tag: 3 },
  { path: "./img/pear-img.png", tag: 4 },
  { path: "./img/strawberry-img.png", tag: 5 },
  { path: "./img/orange-img.png", tag: 6 },
  { path: "./img/cherry-img.png", tag: 7 },
];
const $root = $("#root");

let cardArr = [];
let fillArrCards = () => {
  for (let key in cardImgs) {
    cardArr.push(cardImgs[key]);
    cardArr.push(cardImgs[key]);
  }
};
let shuffleCards = () => {
  cardArr.sort(() => Math.random() - 0.5);
};
let gameLogic = () => {
  cardArr.forEach((card) => {
    let $cardDiv = $("<div></div>").addClass("card").data("item", card.tag);

    let $img = $("<img/>")
      .attr("src", card.path)
      .addClass("hide")
      .attr("draggable", "false");

    $cardDiv.append($img);

    $cardDiv.on("click", () => {
      if (blockClick || gameCompleted) return;
      if (!firstCard) {
        firstCard = { $cardDiv, $img };
        $img.toggleClass("hide");
        $cardDiv.toggleClass("card-pressed");
        movesMade++;
        if (movesMade === 1) {
          timeInterval = setInterval(addSeconds, 1000);
        }
      } else if (firstCard && !secondCard && firstCard.$cardDiv !== $cardDiv) {
        secondCard = { $cardDiv, $img };
        $img.toggleClass("hide");
        $cardDiv.toggleClass("card-pressed");
        blockClick = true;

        if (
          firstCard.$cardDiv.data("item") === secondCard.$cardDiv.data("item")
        ) {
          firstCard.$cardDiv.toggleClass("matched");
          secondCard.$cardDiv.toggleClass("matched");
          firstCard = null;
          secondCard = null;
          blockClick = false;
          matchesFound++;

          if (matchesFound === cardArr.length / 2) {
            clearInterval(timeInterval);
            gameCompleted = true;
            setTimeout(() => {
              if (
                confirm(
                  "Congrats! You've completed the game! Do you want to play again?"
                )
              ) {
                location.reload();
              }
            }, 500);
          }
        } else {
          setTimeout(() => {
            firstCard.$img.toggleClass("hide");
            firstCard.$cardDiv.toggleClass("card-pressed");
            secondCard.$img.toggleClass("hide");
            secondCard.$cardDiv.toggleClass("card-pressed");

            firstCard = null;
            secondCard = null;
            blockClick = false;
          }, 1000);
        }
        document.getElementById(
          "moves"
        ).innerHTML = `<h2>Total moves: ${movesMade}</h2>`;
      }
    });

    $root.append($cardDiv);
  });
};

let minutes = 0;
let seconds = 0;
let timeInterval = null;
let addSeconds = () => {
  if (seconds > 59) {
    minutes++;
    seconds = 0;
  }
  seconds++;

  $("#time").html(
    `<h2>${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    }</h2>`
  );
};

let firstCard = null;
let secondCard = null;
let blockClick = false;
let matchesFound = 0;
let gameCompleted = false;
let movesMade = 0;

fillArrCards();
shuffleCards();
gameLogic();
