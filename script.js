const container = document.querySelector("#container");
const debugBtn = document.querySelector("#debugBtn")
let debug = false;

function createCell(sideLength, debug = false) {
    for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
            const square = document.createElement('div');
            square.classList.add('cell');

            if (debug) {
                square.textContent = `R# ${i + 1} C# ${j + 1}`
            }
            container.appendChild(square);
        }
    }
}

debugBtn.addEventListener("click", () => {

    debug = !debug; // Toggle debug mode
    console.log(debug);
    container.innerHTML = ''; // Clear previous cells
    createCell(16, debug)

    let cells = document.querySelectorAll(".cell");

    cells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            cell.style.backgroundColor = "red";
        });
    });
});

createCell(16, debug);

let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        cell.style.backgroundColor = "yellow";
    });
});