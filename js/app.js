/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let winner
let tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')



/*-------------------------------- Functions --------------------------------*/
const init = () => {
    console.log('init function worked')
    board = ['P','E','R','R','O','L','O','C','O']
    turn = 'x'
    winner = false
    tie = false
    render ()
}

const render = () => {
    updateBoard()
    updateMessage()
}

const updateBoard = () => {
    board.map((element, idx) => {
        
        console.log(idx) 
        console.log(squareEls[idx].textContent = element) 
    })
}

const updateMessage = () => {
    if (winner === false && tie === false){
        console.log('whos turn it is')
    }else if (winner === false && tie === true){
        console.log('tie!')
    }else {
        console.log('cogratulation to player something')
    }
}
init()

/*----------------------------- Event Listeners -----------------------------*/



