
function startGame(){
    ship.generalShipLocations();
    document.querySelector('.content').innerHTML = ' ';
    document.querySelector('.message').innerHTML = ' ';
    document.querySelector('.templateFirst').innerHTML = tpl;
    document.querySelector('#new').classList.remove("newGame");
}

var buttonNewGame = document.querySelector('#newGame');
buttonNewGame.addEventListener('click',startGame);

var button = document.querySelector('a');
button.addEventListener('click',startGame);








