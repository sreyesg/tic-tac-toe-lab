/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,8],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    
]
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
    board = ['','','','','','','','','']
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
        
        // console.log(idx) 
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
const placePiece = (idx) => {
    board[idx] = turn
    console.log(board)
}
const checkForWinner = () => {
    winningCombos.map((winningCombo) => {
        console.log('combo >>>', winningCombo)
        console.log(board[winningCombo[0]])
        console.log(board[winningCombo[1]])
        console.log(board[winningCombo[2]])
        if (board[winningCombo[0]] !=='' && board[winningCombo[0]] === board[winningCombo[1]] && board[winningCombo[1]] === board[winningCombo[2]]) {
            console.log('winner')    
        }
        
    })
}   
        
        
//         .map((idxPosition) => {
//             // console.log('value at position >>>',board[winningCombo[0]])
//              
            
//             // collectValues.push(board[element])
            
//         })
//     })  
//     // console.log(collectValues)
// }

init()

const handleClick = (event) => {
    // console.log('event working')
    const squareIndex = event.target.id
    if (board[squareIndex] === 'x' || board[squareIndex] === 'o') {
        return
    }else if (winner === true) {
        return
    }
    placePiece(squareIndex)
    checkForWinner()
}

/*----------------------------- Event Listeners -----------------------------*/
Array.from(squareEls).map((square) => {
    square.addEventListener('click',handleClick)
})

