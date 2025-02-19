let map = [];
let tile1 = null, tile2 = null;
let rows = 4;
let cols = 4;
const loadMap = (rows = 4, cols = 4) => (rows * cols) / 2;

let pairs = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

let shuffled = shuffle(pairs);
console.log(shuffled)


let index = 0;
for (let row = 0; row < rows; row++) {
    let rowA = []
    for (let col = 0; col < cols; col++) {
        rowA.push(shuffled[index]);
        index++;
    }
    map.push(rowA);
}
console.log(map);

const makeBoard = (rows = 4, cols = 4) => {
    let output = '<table>';
    for (let row = 0; row < rows; row++) {
        output += '<tr>';
        for (let col = 0; col < cols; col++) {
            output += '<td><button' + ' class="tile"' + ' id="' + row + '_' + col + '"' + ' onclick="process(' + row + ',' + col + ')">' + '</button></td>';
        }
        output += '</tr>';
    }
    document.getElementById('gameBoard').innerHTML = output + '</table>';
}

const resetBoard = () => {
    loadMap();
    makeBoard();
}

const process = (row, col) => {
    let clicked_tile = document.getElementById(row + '_' + col);

    if (!Boolean(clicked_tile.innerHTML)) {
        if (!tile1) {
            tile1 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
        }
        else if (!tile2) {
            tile2 = clicked_tile;
            clicked_tile.innerHTML = map[row][col];
        }
        setTimeout(checkMatch, 1000);
    }

}

const checkMatch = () => {
    if (tile1.innerHTML == tile2.innerHTML) {
        tile1.hidden = true;
        tile2.hidden = true;
    }
    tile1.innerHTML = '';
    tile2.innerHTML = '';
    tile1 = tile2 = null;
}