let ting = new Audio('ting.mp3')
let turn = "X"
let gameover = false

// Function For Change The Turn 

const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// function for check to win

const checkWin = () => {
    let text = document.getElementsByClassName('text');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((text[e[0]].innerText === text[e[1]].innerText) && (text[e[1]].innerText === text[e[2]].innerText) && (text[e[0]].innerText !== '')) {
            document.querySelector('.change').innerText = text[e[0]].innerText + 'Won'
            gameover = true;
            document.querySelector('.anime').getElementsByTagName('img')[0].style.width = '80px'
        }
    })
}

// Game Logic

let games = document.getElementsByClassName('game');
Array.from(games).forEach(element => {
    let text = element.querySelector('.text');
    element.addEventListener('click', () => {
        if (text.innerText === '') {
            text.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName('change')[0].innerText = 'Turn For' + turn;
            }
        }
    })
})

// for reset button

let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach((text) => {
        text.innerText = ''
    })
    turn = 'X'
    gameover = false;
    document.getElementsByClassName('change')[0].innerText = 'Turn For' + turn;
    document.querySelector('.anime').getElementsByTagName('img')[0].style.width = '0'
})
