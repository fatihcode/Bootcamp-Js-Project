const button = document.querySelectorAll("button")

const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const result = document.getElementById("result")

const player = document.querySelector("#player")
const computer = document.querySelector("#computer")

const demo = document.getElementById("demo")

const rock = "fas fa-hand-rock"
const paper = "fas fa-hand-paper"
const scissors = "fas fa-hand-scissors"

let you = 0;
let com = 0;


//----------------------------------------------------------


const rps = [rock, paper, scissors]

function random() {
    computer.className = rps[Math.floor(Math.random() * rps.length)]
}


//----------------------------------------------------------


function game() {

    if (player.className == computer.className) {

        result.innerHTML = "Draw !!!"

    } else if ((player.className == rock && computer.className == scissors) || (player.className == paper && computer.className == rock) || (player.className == scissors && computer.className == paper)) {

        result.innerHTML = "You Win !!!"
        you++
        playerScore.innerHTML = you

    } else if ((player.className == rock && computer.className == paper) || (player.className == paper && computer.className == scissors) || (player.className == scissors && computer.className == rock)) {

        result.innerHTML = "You Lose !!!"
        com++
        computerScore.innerHTML = com

    }
}

//----------------------------------------------------------


button.forEach(item => item.onclick = () => {
    random()
    player.className = item.className
    game()
})