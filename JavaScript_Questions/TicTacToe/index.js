const gridSize = 3
const boardRef = document.querySelector(".tic-tac-toe")

let currentPlayer = "X"
let game = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));

function changePlayer(){
    currentPlayer = currentPlayer == "X" ? "0" : "X"
}

function createBoard(){
    for(let i=0;i<gridSize;i++){
        const rowRef = document.createElement("div")
        rowRef.className = 'row'

        for(let j=0;j<gridSize;j++){
            const cellRef = document.createElement("div")
            cellRef.className = 'cell'
            cellRef.setAttribute('data-row',i)
            cellRef.setAttribute('data-col',j)
            rowRef.appendChild(cellRef)
        }
        boardRef.appendChild(rowRef)
    }
}

function updateGameData(rowId,colId,currentPlayer){
   if(!game[rowId]){
      game[rowId] = []
   }
   game[rowId][colId] = currentPlayer
}

function addListener(){
    boardRef.addEventListener("click",function(e){;
        if(e.target.nodeName == "DIV"){
            if(e.target.classList.contains("cell") && !e.target.innerText){
                e.target.innerText = currentPlayer
                const rowId = e.target.dataset.row
                const colId = e.target.dataset.col
                updateGameData(rowId,colId,currentPlayer)
                if(checkWin(rowId,colId)){
                    alert("Winner is " + currentPlayer)
                    resetGame();
                }
                changePlayer()
            }
        }
    })
}

function resetGame() {
    game = Array(gridSize).fill(null).map(() => Array(gridSize).fill(null));
    boardRef.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    currentPlayer = "X";
}


function checkWin(row,col){
    row = parseInt(row);
    col = parseInt(col);

    if(game[row].every(cell => cell === currentPlayer ))return true

    if(game.every(row => row[col] === currentPlayer ))return true

    if (row === col && game.every((row, index) => row[index] === currentPlayer)) return true;

       
    if (row + col === gridSize - 1 && game.every((row, index) => row[gridSize - 1 - index] === currentPlayer)) return true;

    return false;

}

createBoard()
addListener()
