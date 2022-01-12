function random() {
    return Math.ceil(Math.random() * 6)
}

const startButton = document.getElementById("start")

startButton.onclick = function run() {
    
    let random1 = random()
    let random2 = random()

    const dice1 = document.getElementById("dice_A")
    const dice2 = document.getElementById("dice_B")

    dice1.setAttribute("src", `images/dice${random1}.png`)
    dice2.setAttribute("src", `images/dice${random2}.png`)

    const sonuc = document.querySelector("h1")

    player_1 = document.getElementById("player_1")
    player_2 = document.getElementById("player_2")

    if (random1 > random2) {
        sonuc.innerHTML = `Player 1 Wins!!!`
        player_1.className = "player-win"
        player_2.className = ""

    } else if (random1 < random2) {
        sonuc.innerHTML = `Player 2 Wins!!!`
        player_2.className = "player-win"
        player_1.className = ""

    } else {
        sonuc.innerHTML = `Draw`
        player_1.className = ""
        player_2.className = ""
    }
}