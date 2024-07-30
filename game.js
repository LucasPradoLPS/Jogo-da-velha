let board = ['', '', '', '', '', '', '', '', ''];
let playerTime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleMove(position) {
    if (gameOver || board[position] !== '') {
        return;
    }

    board[position] = symbols[playerTime];
    gameOver = isWin();

    if (!gameOver) {
        playerTime = (playerTime === 0) ? 1 : 0;
    }

    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let [pos1, pos2, pos3] = winStates[i];
        if (board[pos1] === board[pos2] &&
            board[pos1] === board[pos3] &&
            board[pos1] !== '') {
            return true;
        }
    }
    return false;
}