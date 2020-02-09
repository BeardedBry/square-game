const container = document.querySelector('.container');

const tr = () => document.createElement('tr');
const tableCell = () => document.createElement('td');

for (let i = 0; i < 10; i++) {
    const row = container.appendChild(tr());
    row.classList.add(`row-${i}`);
    console.log(row);
    for(let j = 0; j < 10; j++) {
        const tc = row.appendChild(tableCell());
        tc.classList.add(`row-${i}-cell-${j}`);
    }
}