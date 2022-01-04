let shape = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon"
}

function sekil(num) {
    return `Aradığınız ${num} kenarlı şekilin adı ${shape[num]}`
}



console.log(sekil(2))