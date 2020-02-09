// get cell from coordinates
const getCell = (row, column) => document.querySelector(`[data-coord="${row},${column}"]`);

// get coordinate from cell element
const getCoord = (element) => element.dataset.coord.split(",");

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

// check up
const moveUp = (coord) => {
    const [row,col] = coord;
    if(row-1 < 0){
        return;
    }else if(positionFree(row-1,col)){
        const newPosition = getCell(row-1,col);
        setPlayer1(newPosition);
    }
}

// check up
const moveDown = (coord) => {
    const [row,col] = coord;
    if(row+1 > 9){
        return;
    }else if(positionFree(row+1,col)){
        const newPosition = getCell(row+1,col);
        setPlayer1(newPosition);
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
document.addEventListener('keyup', (event) => {

    const playerPos = getCoord(getPlayer1());
    //console.log(playerCoord);

    switch(event.key) {
        case 'ArrowUp':
            moveUp(playerPos);
            break;
        case 'ArrowRight':
            break;
        case 'ArrowDown':
            moveDown(playerPos);
            break;
        case 'ArrowLeft':
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