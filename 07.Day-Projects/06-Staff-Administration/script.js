console.warn("First of all print out all staff objects seperately on the console.")

staff.forEach(item => console.log(item))



//-----------------------------------------------------
console.warn("Add a new property for all staff objects. Add an email property should look like “ **lastname** @coorparation.com.")



staff.forEach(item => item["email"] = item.lastName.toLowerCase() + "@coorparation.com")

console.log(staff)



//-----------------------------------------------------
console.warn("Now, add a function named “fullName”to all objects; function should return a new fullname property with the concatenation of firstname and lastname.")



function fullName(val) {

    val.forEach(item => item["fullName"] = item.firstName + " " + item.lastName)

}

fullName(staff)

console.log(staff)



//-----------------------------------------------------
console.warn("Find all older than 21 age staff, print them out.")



let age21 = staff.filter(item => item.age > 21)

console.log(age21)



//-----------------------------------------------------
console.warn("Sort staff according to their experience. From low to high.")



staff.sort((a, b) => a.experience - b.experience)

console.log(staff)


//-----------------------------------------------------
console.warn("Calculate the average age of the staff.")




function average(val) {

    let sum = 0

    for (let i = 0; i < val.length; i++) {
        sum += val[i].age
    }

    return (sum / val.length).toFixed(0)
}


console.log(average(staff))

console.log(staff.reduce((a, b) => a + b.age, 0) / staff.length)



//-----------------------------------------------------
console.warn("You are trying to find a staff exect properties:")



let filterProperties = staff.filter(item => item.language === "Turkish" && item.age < 40 && item.isActive).sort((a, b) => b.age - a.age)


console.log(filterProperties)



//-----------------------------------------------------
console.warn("Room Number")

let room = staff.map(item => [item.fullName, item.roomNumber])

let phone = staff.map(item => {
    return {
        name: item.fullName,
        phone: item.phoneExt
    }
})

console.log(room)

console.log(phone)