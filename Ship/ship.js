var Ship = function ( locations, hits ) {
  this. boardSize = 7;
  this.numShips = 3;
  this.ships = [
      {locations: ['0','0','0'], hits: ['','','']},
      {locations: ['0','0','0'], hits: ['','','']},
      {locations: ['0','0','0'], hits: ['','','']}
  ];
  this.shipsSunk = 0;
  this.Lenght = 3;
};

Ship.prototype.fire = function( guess ) {

    for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        var index = ship.locations.indexOf( guess );
        if (index >= 0) {
            ship.hits[index] = 'hit';

            view.displayHit( guess );
            view.showMessage('HIT!');

                if (this.isSunk(ship)) {
                    view.showMessage('You sank my battleship!');
                    this.shipsSunk++;
                }
            return true;
        }
    }

    view.displayMiss( guess );
    view.showMessage( 'You missed' );
    return false;
};

Ship.prototype.isSunk = function ( ship ) {
    for(i=0; i>= ship.Lenght; i++){
        if(ship.hits[i] !== 'hit'){
            return false;
        }
    }
    return true;
};

Ship.prototype.generalShipLocations = function (){
    var locations;
    for (var i = 0; i < this.numShips; i++) {
        do {
            locations = this.generalShip();
        }
        while (this.collision(locations));
        this.ships[i].locations = locations;
    }
};

Ship.prototype.generalShip = function () {
    var randomNumber = Math.random( 0,1 );
    var directions = Math.round(randomNumber);
    var newShipLocations = [];
    var row,
        col;

        if (directions === 1){
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - 3));

        }else{
            row = Math.floor(Math.random() * (this.boardSize - 3));
            col = Math.floor(Math.random() * this.boardSize);

        }

    for (var i = 0; i < this.Lenght; i++) {
        if(directions === 1){
            newShipLocations.push(row + '' + (col + i));
        } else{
            newShipLocations.push((row + i) + '' + col);
        }
    }
        return newShipLocations;
};

Ship.prototype.collision = function ( locations ) {
    for (var i = 0; i < this.numShips; i++) {
        var ship = this.ships[i];
        for (var j = 0; j < locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >= 0) {
                return true;
            }
        }
    }
    return false;
};

ship = new Ship();

