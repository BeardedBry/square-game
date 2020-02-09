// get cell from coordinates
// row = Number
// col = Number
const getCell = (row, col) => {
    return document.querySelector(`[data-coord="${row},${col}"]`);
}

// get coordinate from cell element
const getCoord = (element) => element.dataset.coord.split(",");

// return cell with player1
const getPlayer1 = () => document.querySelector('.player1');

// cell = html element <td>
// color = hex color, string, rgb
const colorSquare = (cell, color) => {
    cell.style.background = color;
}

//colorSquare(getCoor(4,4), 'red');
const container = document.querySelector('.container');

// check for free movement
const surroundings = (coordinates) => {

}

// creates initial board
const makeBoard = (rows,columns) => {
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

    const playerCoord = getCoord(getPlayer1());
    console.log(playerCoord);

    switch(event.key) {
        case 'ArrowUp':
            break;
        case 'ArrowRight':
            break;
        case 'ArrowDown':
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