const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "22.5%", "18.8%", "19.5%", "20.2%", "31.6%"];

console.log(oxygenLevels1)

let oxygen1 = oxygenLevels1.join("").split("%")
let oxygen2 = oxygenLevels2.join("").split("%")

// console.log(arr)


function safe(ar) {

    for (let i = 0; i < ar.length; i++) {

        if (ar[i] > 19.5 && ar[i] < 23.5) {

            return ar[i]
        }
    }
}


console.log(safe(oxygen1));




function safe2(ar) {

    let safeArray = []

    for (let i = 0; i < ar.length; i++) {

        if (ar[i] > 19.5 && ar[i] < 23.5) {

            safeArray.push(ar[i])
        }
    }
    return safeArray
}


console.log(safe2(oxygen2));