//console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardFour);

//var cards = ["queen", "queen", "king", "king"];
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
	}
];
var cardsInPlay = [];

var checkForMatch = function (){

	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	}	
};

var flipCard = function (){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src',cards[cardId].cardImage);	
	checkForMatch();
	/*if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again!");
	}	*/
	
	
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);	
	}
};

createBoard();
//flipCard(0);
//flipCard(2);

/*
var cardOne = cards[2];
	cardsInPlay.push(cardOne);
	var cardTwo = cards[3];
	cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);


}*/

