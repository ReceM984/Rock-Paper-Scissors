var board = document.getElementById('board');
board.width = window.innerWidth;
board.height = window.innerHeight;
var ctx = board.getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, board.width, board.height);
gradient.addColorStop(0, "rgb(255, 0, 128)");   
gradient.addColorStop(0.25, "rgb(255, 51, 153)");
gradient.addColorStop(0.5, "rgb(204, 0, 255)");
gradient.addColorStop(0.75, "rgb(153, 51, 255)");
gradient.addColorStop(1, "rgb(102, 0, 153)");

var rockVals = [document.getElementById('rock'), (board.width/4) - 73, 3*board.height/4, 73*2, 59*2];
var paperVals = [document.getElementById('paper'), (2*board.width/4) - 53, 3*board.height/4, 53*2, 66*2];
var scissorsVals = [document.getElementById('scissors'), (3*board.width/4) - 60, 3*board.height/4, 60*2, 70*2];
var RPSTextVals = [document.getElementById('RPSText'), (board.width/2) - 1326/8, board.height/45, 1326/4, 170/4];

var playerChoice;

window.addEventListener('load', function() {
    setInterval(update, 100);
});

function update() {

    ctx.drawImage(rockVals[0], rockVals[1], rockVals[2], rockVals[3], rockVals[4]);
    ctx.drawImage(paperVals[0], paperVals[1], paperVals[2], paperVals[3], paperVals[4]);
    ctx.drawImage(scissorsVals[0], scissorsVals[1], scissorsVals[2], scissorsVals[3], scissorsVals[4]);
    ctx.drawImage(RPSTextVals[0], RPSTextVals[1], RPSTextVals[2], RPSTextVals[3], RPSTextVals[4]);
}

document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement) {
        location.reload();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F11') {
        location.reload();
    } else if (e.key === 'r'){
        playerChoice = 'rock';
    } else if (e.key === 'p'){
        playerChoice = 'paper';
    } else if (e.key === 's'){
        playerChoice = 'scissors';
    }
});