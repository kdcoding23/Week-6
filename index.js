// For the WAR game below, here are the following rules: 2 players; must deal 26 Cards to 2 Players from a Deck; iterate through the turns when each Player plays a Card; the Player with the higher card gets a point; ties results in zero points for both Players; and after all cards have been played, the scores and winner will be displayed.


// class Card represents the playing cards, which have suits and ranks.
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

// class Deck represents the deck. Uses an empty array to store cards.
class Deck {
    constructor() {
        this.cards = [];    
    }

    // createDeck function defines each possibility for suit and rank. The for-loop loops through each suit, then through all 13 ranks. It pushes a new card (using this.cards) and pushes it into the array, logging the suit and rank for each card dealt.
    createDeck() {
        let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        let ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < 13; j++) {
                this.cards.push(new Card(suits[i], ranks[j]));
            }
        }
    }

    // shuffleDeck uses a for-loop to loop through each card in the deck until there are 0 cards left. j is defined under i again. Math.random and Math.floor generate a random number and round it down to the nearest whole number. (Learning how the temp variable is used in js for swapping was pretty interesting!)
    shuffleDeck() {
       for (let i = this.cards.length - 1; i > 0; i--) {
           let j = Math.floor((Math.random() * i));
           let temp = this.cards[i];
           this.cards[i] = this.cards[j];
           this.cards[j] = temp;
        }
    }
}

// The arrays in both Player1 and Player2 classes are empty so that different information (a deck) can be given to each player with every new game.
class Player1 {
    constructor() {
        this.player1Cards = [];
    }
}

class Player2 {
    constructor() {
        this.player2Cards = [];
    }
}

// class Hand represents the dealing of the deck or the game itself.
class Hand {
    constructor() {
        this.players = [];
    }

    // Creates new players and a deck from the constructors above. Then takes the new Deck and creates/shuffles it. Each player is given 26 cards or half of the deck (using .slice).
    start(player1, player2) {
        this.players.push(new Player1(player1));
        this.players.push(new Player2(player2));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();    
        this.players[0].player1Cards = newDeck.cards.slice(0, 26);
        this.players[1].player2Cards = newDeck.cards.slice(26, 52);
    }
}

// Creates new Hand from constructor above and logs each player's array of cards.
let playerHands = new Hand();
playerHands.start('Player1', 'Player2');
console.log(playerHands.players);

// Creates variables and another loop to keep track of scores and then log them.
let p1 = playerHands.players[0];
let p2 = playerHands.players[1];
let s1=0;
let s2=0;

// For-loop loops through every round and gives a point to whoever scores the higher rank after each round.
for(let i = 0; i < playerHands.players[0].player1Cards.length; i++){
    if (p1.player1Cards[i].rank > p2.player2Cards[i].rank){
        s1++;
    } else {
        s2++;
    }
}

console.log(`Player 1 Score: ${s1} 
Player 2 Score: ${s2}`);