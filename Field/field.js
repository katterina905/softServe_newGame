var Field = function (){
    this.guesses = 0
};

Field.prototype.processGuess = function ( e ) {
    var id = e.target.id;
    this.guesses++;

        var hit = ship.fire( id );
        if ( hit && ship.shipsSunk === ship.numShips ) {
            view.showMessage('You sank all my battleships, in ' +
                this.guesses + ' guesses ');}

};

var field = new Field();

document.querySelector('.templateFirst').addEventListener('click', field.processGuess.bind(field));