// Etch-A-Sketch!
// Create a 16x16 grid using javascript
// Each grid item will have hover effect causing divs to change color
// Allows custom size based on user input (grid should always be perfect square, so no need to distinguish width and height)
// BONUS 1: Adds button to change coloring to "rainbow mode" (aka, applies random RGB background-color on hover)
// BONUS 2: Implements a progressive darkening effect, with each hover making the square 10% darker, with 10 hovers resulting in pitch black

let squareContainer = document.querySelector('.square-container')

// separately create squares and effects into multiple functions

createSquares(16, 16)
function createSquares(width, height) {
    for (i = 0; i < height; i++) {
        let squareRowDiv = document.createElement('div')
        squareRowDiv.setAttribute('class', 'squareRow')
        squareContainer.appendChild(squareRowDiv)
        for (let j = 0; j < width; j++) {
            let squareDiv = document.createElement('div')
            squareDiv.setAttribute('class', 'square')
            squareRowDiv.appendChild(squareDiv)
        }
    }
}

// squares change color on hover 
let squares = document.querySelectorAll('.square')
squares.forEach((square) => square.addEventListener('mouseenter', () => {
    square.setAttribute('style', 'background-color: black');
}))

// clear button
let clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () =>
    squares.forEach((square) => square.setAttribute('style', 'background-color: #eee'))
)

// // custom grid size, up to 100x100 (UNDER CONSTRUCTION)
// let customBtn = document.querySelector('.custom')
// customBtn.addEventListener('click', createSquares(int(prompt('Please enter a value between 1-100:')))