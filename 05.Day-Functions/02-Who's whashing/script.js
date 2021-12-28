let student = ["Ben", "Jenny", "Michael", "Chloe", "Timmy"]

function whoIsWashing(arr) {

    let wash = arr[Math.floor(Math.random() * arr.length)]

    return console.log(`"${wash}" is going to wash dishes today!`)
}


whoIsWashing(student)


student.push("Max")

whoIsWashing(student)


let neighbours = ["Patrick", "AnnMarie", "Alisol", "Walton"]

whoIsWashing(neighbours)