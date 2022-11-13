const board = document.querySelector('#board')
const colors = ['#fb8d43', '#fc898e', '#85efb9', '#a5a1c8', '#1cb245', '#e37497', '#f9aeff']
const SQUARES_NUMBER = 500


for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'

    element.style.boxShadow = ''
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}