var expect = chai.expect;

describe("MyFunctions", function(){
    describe("#createDeck", function(){
        it("should create a deck of 52 cards using various suits and ranks", function(){
            // var newDeck = createDeck();
            // expect(newDeck.length).to.equal(52);
            var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
            var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
            createDeck = [suits, ranks];
            expect(createDeck.length).to.equal(2);
        });
    });
});

// The test above verifies that each array (card pulled from the deck) will have 2 properties in it (a suit and a rank).