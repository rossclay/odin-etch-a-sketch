// Etch-A-Sketch!
// Create a 16x16 grid using javascript
// Each grid item will have hover effect causing divs to change color

let squareContainer = document.querySelector('.square-container')


// Create the grid with a button
let sixteenBySixteenBtn = document.querySelector('.sixteen-by-sixteen')

// // create square ->(grid) and hover effect in one function?
// sixteenBySixteenBtn.addEventListener('click', () => {
//     let div = document.createElement('div')
//     div.setAttribute('class', 'square')
//     squareContainer.appendChild(div)
//     squares.forEach((square) => square.addEventListener('mouseenter', () => {
//         square.setAttribute('style', 'background-color: black');
//     }))

// }
// )


// separate create squares and effects into multiple functions
sixteenBySixteenBtn.addEventListener('click', createSquares(16, 16))

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