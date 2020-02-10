// get cell from coordinates
const getCell = (row, column) => document.querySelector(`[data-coord="${row},${column}"]`);

// get coordinate from cell element
const getCoord = (element) => strToNum(element.dataset.coord.split(","));

// return cell with player1
const getPlayer1 = () => document.querySelector('.player1');

const setPlayer1 = (cell) => {
    getPlayer1().classList.remove('player1');
    cell.classList.add('player1');
}

// cell = html element <td>
const colorSquare = (cell, color) => cell.style.background = color;

//// check for free movement
// Todo refactor move functions
const positionFree = (row,col) => getCell(row,col).classList.length < 1;

// check if position exists
const posExists = (row, col) => getCell(row,col) !== null;

// convert array of strings to numbers
const strToNum = (arr) => arr.map((str) => parseInt(str,10));

// movement
const move = (coord, direction) => {
    const [row,col] = coord;
    switch (direction) {
        case 'down':
            if(!posExists(row+1,col)){
                return
            }else if(positionFree(row+1,col)){
                const newPosition = getCell(row+1,col);
                setPlayer1(newPosition);
            }
            break;
        case 'right':
            if(!posExists(row,col+1)){
                return
            }else if(positionFree(row,col+1)){
                const newPosition = getCell(row,col+1);
                setPlayer1(newPosition);
            }
            break;
        case 'left':
            if(col-1 < 0){
                return;
            }else if(positionFree(row,col-1)){
                const newPosition = getCell(row,col-1);
                setPlayer1(newPosition);
            }
            break;
        case 'up':
            if(row-1 < 0){
                return;
            }else if(positionFree(row-1,col)){
                const newPosition = getCell(row-1,col);
                setPlayer1(newPosition);
            }
            break;
        default:
            return;
    }
}

// creates initial board
const makeBoard = (rows,columns) => {
    const container = document.querySelector('.container');
    const tr = () => document.createElement('tr');
    const tableCell = () => document.createElement('td');

    for (let i = 0; i < rows; i++) {
        const row = container.appendChild(tr());
        for(let j = 0; j < columns; j++) {
            const tc = row.appendChild(tableCell());
            tc.dataset.coord = `${i},${j}`;
        }
    }
}

// movement event listener
document.addEventListener('keydown', (event) => {

    const playerPos = getCoord(getPlayer1());
    //console.log(playerCoord);

    switch(event.key) {
        case 'ArrowUp':
            move(playerPos, 'up');
            break;
        case 'ArrowRight':
            move(playerPos, 'right');
            break;
        case 'ArrowDown':
            move(playerPos, 'down');
            break;
        case 'ArrowLeft':
            move(playerPos, 'left');
            break;
        default:
            return;
    }
});


//////////////////////////////////////////
///////////// Game Init //////////////////
//////////////////////////////////////////

makeBoard(10,10);
const player1Start = getCell(4,4);
//console.log(getCoord(player1Start));
player1Start.classList.add('player1');
getCell(4,5);