
let cards = []
let sum = 0

let hasBlackjack = false
let isAlive = false

let message = ""

function getRandomNumber() { 
    let randomNumber = Math.floor(Math.random()*13)+1
    if  (randomNumber === 1) { 
        return 11
    } else if (randomNumber >= 10){
        return 10
    } else
    return randomNumber
} 

function startGame () {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard 
    cards = [firstCard,secondCard]
    renderGame()
}


function renderGame () {
    document.getElementById("sum-el").innerText = "Sum: " + sum
    for (let i = 0; i < cards.length;  i++) {
    document.querySelector("#cards-el").innerText = "Cards: " + cards + " "
       }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
           } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
         hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    document.getElementById("message-el").innerText = message
}

function draw () {

if (isAlive === true && hasBlackjack === false) {
    let newCard = getRandomNumber()    
    sum += newCard
    cards.push(newCard)
    renderGame()
    }
}



