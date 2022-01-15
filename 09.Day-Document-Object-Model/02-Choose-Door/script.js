const doorImage1 = document.getElementById("door_a")
const doorImage2 = document.getElementById("door_b")
const doorImage3 = document.getElementById("door_c")

const flyDoorPath = "findfly.png"
const forestDoorPath = "forest.png"
const oceanDoorPath = "ocean.png"
const closedDoorPath = 'door_closed.png'

const startButton = document.getElementById("start")

let numClosedDoors = 3;

let openDoor1, openDoor2, openDoor3;

playing = true


//-----------------------------------------------------------


doorImage1.onclick = () => {
    if (playing && doorImage1.src.includes(closedDoorPath)) {
        doorImage1.src = openDoor1
        playDoor(doorImage1)
    }
}

doorImage2.onclick = () => {
    if (playing && doorImage2.src.includes(closedDoorPath)) {
        doorImage2.src = openDoor2
        playDoor(doorImage2)
    }
}

doorImage3.onclick = () => {
    if (playing && doorImage3.src.includes(closedDoorPath)) {
        doorImage3.src = openDoor3
        playDoor(doorImage3)
    }
}


//-----------------------------------------------------------



function randomFindDoorGenerator() {

    let findDoor = Math.floor(Math.random() * 6)
    console.log(findDoor)

    switch (findDoor) {
        case 0:
            openDoor1 = flyDoorPath
            openDoor2 = oceanDoorPath
            openDoor3 = forestDoorPath
            break;
        case 1:
            openDoor1 = oceanDoorPath
            openDoor2 = forestDoorPath
            openDoor3 = flyDoorPath
            break;
        case 2:
            openDoor1 = forestDoorPath
            openDoor2 = flyDoorPath
            openDoor3 = oceanDoorPath
            break;
        case 3:
            openDoor1 = flyDoorPath
            openDoor2 = forestDoorPath
            openDoor3 = oceanDoorPath
            break;
        case 4:
            openDoor1 = oceanDoorPath
            openDoor2 = flyDoorPath
            openDoor3 = forestDoorPath
            break;
        case 5:
            openDoor1 = forestDoorPath
            openDoor2 = oceanDoorPath
            openDoor3 = flyDoorPath
            break;
    }
}

randomFindDoorGenerator()


//-----------------------------------------------------------


function playDoor(door) {

    numClosedDoors--

    if (numClosedDoors == 0) {
        startButton.innerHTML = 'You win!<br>Play again?';
        startButton.classList.add("start-row-win")
        playing = false
        

    } else if (door.src.includes(flyDoorPath)) {
        startButton.innerHTML = 'Game Over!<br>Play again?';
        startButton.classList.add("start-row-lose")
        playing = false
    }
}


//-----------------------------------------------------------


startButton.onclick = () => {
    startButton.innerHTML = 'Good<br>Luck!'
    doorImage1.src = closedDoorPath
    doorImage2.src = closedDoorPath
    doorImage3.src = closedDoorPath
    numClosedDoors = 3
    playing = true
    startButton.classList.remove("start-row-win")
    startButton.classList.remove("start-row-lose")
    randomFindDoorGenerator()
}


//-----------------------------------------------------------