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
    board = ['','','','','','','','','','']
    turn = 'x'
    winner = false
    tie = false
    render ()
}

const render = () => {

}
const updateBoard = () => {
    board.map((element, idx) => {
        console.log(squareEls[idx]) 
    })
}


init()
updateBoard()
/*----------------------------- Event Listeners -----------------------------*/



