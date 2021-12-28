let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]


function safe(arr) {

    if (arr.every(arr => arr == "pink")) {

        return `Bu çalı güvenli`

    } else {

        return `Bu çalı güvenli değil`
    }
}

console.log(safe(bushBerryColours1))

console.log(safe(bushBerryColours2))