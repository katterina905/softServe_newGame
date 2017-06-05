function View (){

}

View.prototype.showMessage = function ( textMessage ){
  document.querySelector('.message').innerHTML = textMessage;
};

View.prototype.displayHit = function ( location ) {
  var cell = document.getElementById( location );
  cell.classList.add('hit');
};

View.prototype.displayMiss = function ( location ){
  var cell = document.getElementById( location );
  cell.classList.add('miss');
};

var view = new View();

