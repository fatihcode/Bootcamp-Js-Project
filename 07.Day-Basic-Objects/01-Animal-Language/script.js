//Convert any text to whale language! 

let input = 'Hi, Human!';

function animal(inp) {
    const sesli = ["a", "e", "i", "u", "o"]
    let resultArray = []
    let arr = inp.split("")

    for (let i = 0; i < arr.length; i++) {

        for (let m = 0; m < sesli.length; m++) {

            if (arr[i] === sesli[m]) {

                resultArray.push(arr[i])

                if (arr[i] === "e" || arr[i] === "u") {

                    resultArray.push(arr[i])
                }
            }
        }
    }
    return resultArray.join("").toUpperCase()
}

console.log(animal(input));