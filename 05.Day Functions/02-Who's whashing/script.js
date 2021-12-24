let student=["Ben", "Jenny", "Michael", "Chloe", "Timmy"]

student.push("Max")

function whoIsWashing(arr) {
    
    let wash = arr[Math.floor(Math.random()*arr.length)]    

    return console.log(`${wash} yıkayacak`)
}

whoIsWashing(student)

let komsu=["Patrick", "AnnMarie", "Alisol" , "Walton"]

whoIsWashing(komsu)