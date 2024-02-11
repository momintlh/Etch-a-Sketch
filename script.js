const container = document.querySelector("#container");
const debugBtn = document.querySelector("#debugBtn");
const newGrid = document.querySelector("#newGrid");
let debug = false;

let cellNo = prompt("Enter the number of Cells: ");
createCell(cellNo);
draw("green")

function createCell(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const square = document.createElement('div');
            square.classList.add('cell');
            container.appendChild(square);
        }
    }
    const containerWidth = (sideLength * 52) + 2;
    container.style.width = containerWidth + 'px';
}

debugBtn.addEventListener("click", () => {
    debug = !debug;
    console.log(debug);

    debugMode();

    if (debug)
        draw("red")

    else
        draw("yellow")
});


newGrid.addEventListener("click", () => {
    cellNo = prompt("Enter the number of Cells: ");
    container.innerHTML = '';
    createCell(cellNo);
    draw("blue")
});



function debugMode() {
    const cells = document.querySelectorAll(".cell");

    if (debug) {
        let cellNo = 0;
        cells.forEach((cell) => {
            cellNo += 1;
            cell.textContent = cellNo;
        });
    } else {
        cells.forEach((cell) => {
            cell.textContent = '';
        });
    }
}

function draw(color) {
    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        let isEraser = false;
        cell.addEventListener("mouseenter", () => {
            if (!isEraser) {
                cell.style.backgroundColor = color;
                isEraser = true;
            } else {
                cell.style.backgroundColor = "gainsboro";
                isEraser = false;
            }
        });
    });

}