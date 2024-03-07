// Etch-A-Sketch!
// Create a 16x16 grid using javascript
// Each grid item will have hover effect causing divs to change color
// Allows custom size based on user input (grid should always be perfect square, so no need to distinguish width and height)
// BONUS 1: Adds button to change coloring to "rainbow mode" (aka, applies random RGB background-color on hover)
// BONUS 2: Implements a progressive darkening effect, with each hover making the square 10% darker, with 10 hovers resulting in pitch black

let squareContainer = document.querySelector('.square-container')

createSquares(16, 16)
function createSquares(width, height) {

    for (i = 0; i < width; i++) {
        let squareColumnDiv = document.createElement('div')
        squareColumnDiv.setAttribute('class', 'square-column')
        squareContainer.appendChild(squareColumnDiv)
        for (let j = 0; j < height; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.setAttribute('class', 'square')
            squareColumnDiv.appendChild(squareDiv)
        }
    }

}

function deleteSquares() {
    let allSquareColumnDiv = document.querySelectorAll('.square-column')
    allSquareColumnDiv.forEach((squareColumnDiv) => squareColumnDiv.replaceChildren())
}


// squares change to standard color on hover 
function assignStandardColor() {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => square.addEventListener('mouseenter', () => {
        square.setAttribute('style', 'background-color: black');
    }))
}
assignStandardColor()

// clear button
let clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => clearSquaresColors())

function clearSquaresColors() {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => square.setAttribute('style', 'background-color: #eee'))
}

// multiple grid sizes
let smallBtn = document.querySelector('.small-btn')
smallBtn.addEventListener('click', () => { deleteSquares() })
smallBtn.addEventListener('click', () => { createSquares(16, 16) })

let mediumBtn = document.querySelector('.medium-btn')
mediumBtn.addEventListener('click', () => { deleteSquares() })
mediumBtn.addEventListener('click', () => { createSquares(32, 32) })

let largeBtn = document.querySelector('.large-btn')
largeBtn.addEventListener('click', () => { deleteSquares() })
largeBtn.addEventListener('click', () => { createSquares(64, 64) })



// BONUS 1: Rainbow button
function generateRandomColors() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
function assignRainbowColor() {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => square.addEventListener('mouseenter', () => {
        square.style.background = generateRandomColors();
    }))
}

let rainbowBtn = document.querySelector('.rainbow-btn')
rainbowBtn.addEventListener('click', () =>
    assignRainbowColor()
)

// reset to standard color
let standardBtn = document.querySelector('.standard-btn')
standardBtn.addEventListener('click', () => assignStandardColor())