const drum = document.querySelectorAll(".drum")
const ses = ["w", "a", "s", "d", "j", "k", "l"]

//-----------------------------------------------

for (let i = 0; i < drum.length; i++) {

    drum[i].onclick = () => {

        new Audio(`sounds/tom-${ses[i]}.mp3`).play();

        drum[i].classList.add("pressed")

        setTimeout(() => drum[i].classList.remove("pressed"), 500);
    };
}

//-----------------------------------------------

window.addEventListener("keydown", (event) => {

    new Audio(`sounds/tom-${event.key}.mp3`).play()

    document.querySelector(`.${event.key}`).classList.add("pressed")

    setTimeout(() => document.querySelector(`.${event.key}`).classList.remove("pressed"), 500);

    // console.log(event)
})