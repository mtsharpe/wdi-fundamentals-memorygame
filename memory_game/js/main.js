var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var matches = 0;
var misses = 0
var flippedCards = document.getElementsByClassName('clicked');

//reset the score without refreshing the browser
var newScore = function() {
	matches = 0;
	misses = 0;
	document.getElementById('matches').textContent = matches;
	document.getElementById('misses').textContent = misses;
}

//rearrange the cards
var shuffle = function(cards) {
  var currentIndex = cards.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
  	randomIndex = Math.floor(Math.random() * currentIndex);
  	currentIndex -= 1;

  	temporaryValue = cards[currentIndex];
  	cards[currentIndex] = cards[randomIndex];
  	cards[randomIndex] = temporaryValue
  }
  return cards;
};

//reset the game with the cards in the same postition
var reset = function() {	
	for (var i = 0; i < flippedCards.length; i++) {
		flippedCards[i].setAttribute('src', 'images/back.png')
	}
};

//reset the game and rearrange card position
var shuffleBoard = function() {
	shuffle(cards);
	reset();
}

//check for matching cards
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	setTimeout (function() {	
	alert("You found a match!");
	matches ++;
	document.getElementById('matches').textContent = matches;
	}, 250); 
    }  else {
	setTimeout (function() {	
	alert("Sorry, try again.");
	misses ++;
	document.getElementById('misses').textContent = misses;
    }, 250);
  }
};

//show card when clicked
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  // console.log("User flipped " + cards[cardId].rank);
  // console.log(cards[cardId].cardImage);
  // console.log(cards[cardId].suit);
     cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', cards[cardId].cardImage);
  this.setAttribute('class', 'clicked');

  if (cardsInPlay.length === 2) {
    checkForMatch();
    cardsInPlay = [];
   }
}; 

//creates the board and randomizes initial card positions
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', 'images/back.png');
  cardElement.setAttribute('data-id', i);
  
  cardElement.addEventListener('click', flipCard);
  document.getElementById('game-board').appendChild(cardElement);
  };
  shuffle(cards);
};	

createBoard();
document.querySelector('button').addEventListener('click', reset);
document.getElementById("newScore").addEventListener('click', newScore);
document.getElementById("shuffle").addEventListener('click', shuffleBoard);





