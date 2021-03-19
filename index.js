// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const numberDice = document.getElementById("numDice")
const tunaRain = document.getElementById("rain")



function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

function hideDisplayButton() {
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
}

function showDice(randomNumber) {
    
    for ( let item of player1Dice.classList) {
        if (item.includes("dice-")) {
            player1Dice.classList.remove(item)
        }
     }
     
    player1Dice.classList.add(`dice-${randomNumber}`)
}  

function showDice2(randomNumber) {

    for (let item of player2Dice.classList) {
        if (item.includes("dice-")) {
            player2Dice.classList.remove(item)
        }
    }

    player2Dice.classList.add(`dice-${randomNumber}`)
} 





/* Hook up a click event listener to the Roll Dice Button. */
rollBtn.addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        showDice(randomNumber)
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "🐱Player 2 Turn"
        
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        showDice2(randomNumber)
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "🐯Player 1 Turn"
    }


    if (player1Score >= 20) {
        message.textContent = "🐯Player 1 has won! 🥳"
        tunaRain.style.display = "block"
        showDisplayButton()
    } else if (player2Score >= 20) {
        message.textContent = "🐱Player 2 has won! 🎉"
        tunaRain.style.display = "block"
        showDisplayButton()
    }

    player1Turn = !player1Turn
})

// 1. Hook a click event listener up with the Reset Button
// 2. Create a reset() function that resets the game
// 3. Invoke the reset() function when the Reset Button is clicked

resetBtn.addEventListener("click", function () {
    reset()
})

function reset() {
    tunaRain.style.display = "none"
    message.textContent = "🐯Player 1 Turn"
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}