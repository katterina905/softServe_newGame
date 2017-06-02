function Field() {
  this.ship = [];

  var shipRandom = new Ship( 1, true, 15, 16 );

  this.ship.push(shipRandom);


}

Field.prototype.isHit = function ( x, y ) {

}
