let btn = document.querySelector('#btn').addEventListener('click', showLetter)
let main = document.querySelector('.main')
let sub = document.querySelector('.sub')

function showLetter() {
    //Hide Main
    console.log('...')
    main.style.display = 'none'
    sub.style.display = 'block'
}