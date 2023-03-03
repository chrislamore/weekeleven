//game data
let player = "X";
let id = '0';
let turns = 0;
let board = ['', '', '', '', '', '', '', '', ''];
let xWin = false;
let oWin = false;

//game logic
function updateCell(id) {
    let cell = document.getElementById(id);
    index = Number(id) - 1;
    if (cell.innerHTML !== '') {
        return;
    }
    cell.innerHTML = player;
    board[index] = player;
}

function updatePlayer() {
    if (player === "X") {
        player = "O"
    }
    else {
        player = "X"
    }
}

function updateHeader() {
    let header = document.getElementById('player-turn');
    header.innerHTML = `It is player "${player}" turn`;
}

function winnerX() {
    //winning moves
    let win = new Array(new Array(0, 1, 2), //first row.
    new Array(3, 4, 5), //second row
    new Array(6, 7, 8), //third row
    new Array(0, 3, 6), //first column
    new Array(1, 4, 7), //second column
    new Array(2, 5, 8), //third column
    new Array(0, 4, 8), //first diagonal
    new Array(2, 4, 6)); //second diagonal
    
    //see if X wins
    for (let i = 0; i < 8; i++) {
        if (board[win[i][0]] == 'X' && board[win[i][1]] == 'X' && board[win[i][2]] == 'X' ) {
            return true;
        }
    }

    return false;
}

function winnerO() {
    //winning moves
    let win = new Array(new Array(0, 1, 2), //first row.
    new Array(3, 4, 5), //second row
    new Array(6, 7, 8), //third row
    new Array(0, 3, 6), //first column
    new Array(1, 4, 7), //second column
    new Array(2, 5, 8), //third column
    new Array(0, 4, 8), //first diagonal
    new Array(2, 4, 6)); //second diagonal
    

    //see if O wins
    for (let i = 0; i < 8; i++) {
        if (board[win[i][0]] == 'O' && board[win[i][1]] == 'O' && board[win[i][2]] == 'O' ) {
            return true;
        }
    }
    return false;
}

function gameOver() {
    oWin = winnerO();
    xWin = winnerX();
    if (oWin) {
        reset();
        alert('O wins!!')
    }
    else if (xWin) {
        header.innerHTML = 'X wins!!';
        reset();
        alert('X wins!!');
    }
    else if (turns === 9) {
        reset();
        alert('It was a draw');
    }
}

function reset() {
    for (let i = 1; i < 10; i++) {
        id = i.toString();
        document.getElementById(id).innerHTML = '';
    }
    turns = 0;
    player = "X";
    updateHeader();
    xWin = false;
    oWin = false;
    board = ['', '', '', '', '', '', '', '', ''];
}

//game elements
document.getElementById('1').addEventListener('click', () => {
    id = '1';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('2').addEventListener('click', () => {
    id = '2';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('3').addEventListener('click', () => {
    id = '3';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('4').addEventListener('click', () => {
    id = '4';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('5').addEventListener('click', () => {
    id = '5';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('6').addEventListener('click', () => {
    id = '6';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('7').addEventListener('click', () => {
    id = '7';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('8').addEventListener('click', () => {
    id = '8';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});
document.getElementById('9').addEventListener('click', () => {
    id = '9';
    updateCell(id);
    updatePlayer();
    updateHeader();
    turns++;
    gameOver();
});

//reset button
document.getElementById('reset').addEventListener('click', () => {
    reset();
})