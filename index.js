let btn = document.querySelector('#btn').addEventListener('click', showLetter)
let main = document.querySelector('.main')
let sub = document.querySelector('.sub')
let love_letter = document.querySelector('.love-letter')

//Love Letters
let one = 'Happy Valentines Queen Baby, one day is not enough to celebrate what we share so I created this so you can always remember how much I love you.'
let two = 'Roses are red, Violets are blue. I am not so good at writing poems, so are you. <br> <br> I guess we at least have one thing in common, lol. I hope you have an amazing day, Beautiful.'
let three = 'My Sunshine, I call you this because you light up my world. Dont think too much about this, this is not the time to be logical but you get me. <br> <br> It\'s almost 2 years of us dating and it still feels like a month ago. I love you Cupcake. '
let four = 'Your smile, your cute cheeks (yh, both of them), your amazing personality and your dedication to things you want are some of the unique things I love about you. <br> <br> Amazing people are like diamonds on the earth, too rare to find. I am happy I found you.'
let five = 'I like the fact that we compliment each other (inside joke lol) and we always try to be there for one another. <br> <br> I like the fact that we learn from eachother, it\'s such a beautiful thing. I love you Ifedoyin Teminikan.'
let letters = [one, two, three, four, five]

function showLetter() {
    //Hide Main
    main.style.display = 'none'
    sub.style.display = 'block'

    //Math Random
    let number = Math.floor(Math.random() * 5)
    console.log(number)

    //Add content into Sub
    love_letter.innerHTML = letters[number]
}