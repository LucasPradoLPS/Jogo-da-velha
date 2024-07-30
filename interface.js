document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

    document.getElementById("restart").addEventListener('click', () => {
        const removeClassFromElements = (className) => {
            const elements = document.getElementsByClassName(className);
            while (elements.length > 0) { 
                elements[0].classList.remove(className);
            }
        };
    
        removeClassFromElements('o');
        removeClassFromElements('x');
        gameOver = false;
        board = ['', '', '', '', '', '', '', '', ''];
        playerTime = 0;
    });
})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime );
        }, 10); 
    };

    updateSquare(position);

}


function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class ='${symbol}'</div>`
}

