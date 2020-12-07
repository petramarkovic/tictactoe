const cells = Array.from(document.querySelectorAll('.cell'));
let spaces = [];
const playerX = "X";
const playerO = "O";
let currentPlayer = playerX;
let gameStatusDisplay = document.querySelector('.game-status');
const restartBtn = document.querySelector('.restart-btn');


cells.forEach((cell, index) => {
    cell.addEventListener('click', handleCellClick)
});

function handleCellClick(e){
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
    }
    if(playerWon()){
        gameStatusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
        return;
    }

    currentPlayer = currentPlayer === playerO ? playerX : playerO;
};


function playerWon(){
    if(spaces[0] === currentPlayer){
        if(spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            return true;
        }
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            return true;
        }
        if(spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            return true;
        }
        }
        if(spaces[8] === currentPlayer){
            if(spaces[2] === currentPlayer && spaces[5] === currentPlayer){
                return true;
            }
            if(spaces[6] === currentPlayer && spaces[7] === currentPlayer){
                return true;
            }
            
        }
        if(spaces[2] === currentPlayer){
            if(spaces[4] === currentPlayer && spaces[6] === currentPlayer){
                return true;
            }
        }
        if(spaces[4] === currentPlayer){
            if(spaces[1] === currentPlayer && spaces[7] === currentPlayer){
                return true;
            } 
            if(spaces[3] === currentPlayer && spaces[5] === currentPlayer){
                return true;
            }
        }
}


function restartGame(){
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    
    cells.forEach(cell => {
        cell.innerText = "";
    });
    gameStatusDisplay.innerHTML = 'Game starts!';
    currentPlayer = playerX;
}

restartBtn.addEventListener('click', restartGame);
restartGame();