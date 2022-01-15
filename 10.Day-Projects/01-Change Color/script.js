//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const text = document.querySelector(".textField")

console.log(text.innerHTML)


button1.onclick = () => {

    let random = Math.floor(Math.random() * colors.length)

    let colorIndex = colors[random]

    console.log(colorIndex)

    document.body.style.backgroundColor = colorIndex

}

button2.onclick = () => {

    function random() {
        return Math.floor(Math.random() * 15).toString(16)
    }

    let colorIndex = "#" + random() + random() + random() + random() + random() + random()

    document.body.style.backgroundColor = colorIndex

    text.innerHTML = colorIndex.toUpperCase()

}


// button2.onclick = ()=>{
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     body.style.backgroundColor = color;
//     h1.textContent = color;
//   }