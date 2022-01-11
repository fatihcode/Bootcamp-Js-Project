const doorImage1 = document.getElementById("door_a")
const doorImage2 = document.getElementById("door_b")
const doorImage3 = document.getElementById("door_c")


const flyDoorPath = "findfly.png"
const forestDoorPath = "forest.png"
const oceanDoorPath = "ocean.png"
const closedDoorPath = 'door_closed.png'

const start = document.getElementById("start")

let numClosedDoors = 3;

let openDoor1, openDoor2, openDoor3;

doorImage1.onclick = () => {
    doorImage1.src = openDoor1
    console.log(numClosedDoors)
    numClosedDoors--
}

doorImage2.onclick = () => {
    doorImage2.src = openDoor2
    console.log(numClosedDoors)
    numClosedDoors--
}

doorImage3.onclick = () => {
    doorImage3.src = openDoor3
    console.log(numClosedDoors)
   numClosedDoors--
}

console.log(numClosedDoors)

const random = function randomFindDoorGenerator() {

    let findDoor = Math.floor(Math.random() * (numClosedDoors*2))

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

random()

if (numClosedDoors == 0) {
    alert("Game Over")
}

// function gameOver(){
//     if (condition) {

//     } else {

//     }
// }

function playDoor() {

}


start.onclick = () => {
    doorImage1.src = closedDoorPath
    doorImage2.src = closedDoorPath
    doorImage3.src = closedDoorPath
    numClosedDoors = 3
}