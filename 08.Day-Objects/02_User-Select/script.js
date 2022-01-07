console.warn("// Get all keys or properties of users object. Print them out.")

for (let key in users) {
    console.log(key)
}



console.warn("// Get all the values of users object. Print them out.")

for (let i in users) {
    console.log(users[i])
}

console.log(Object.values(users))



console.warn("//Get the length of this object.")

console.log(Object.values(users).length)



console.warn("// Find the person who has most skills than the others in the users object.")


let yetenek = Object.keys(users).sort((a, b) => users[b].skills.length - users[a].skills.length)

console.log(yetenek[0])


console.warn("// Count users having greater than equal to 50 points from the users object.")


let i = 0

for (let key in users) {
    if (users[key].points >= 50) {
        i++
    }
}

console.log(i)


console.warn("// Find people who are MERN stack developer from the users object. Print out number of MERN users and their names.")


let a = []

for (let key in users) {
    if (users[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
        a.push(key)
    }
}

console.log(a)


console.warn("// Set your name in the users object without modifying the original users object.")

users.Fatih = {
    email: 'fatih@john.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 35,
    isLoggedIn: false,
    points: 50
}


console.log(users)


console.warn("// Add a method for all users to print a string like:")


for (const key in users) {
    users[key].print = function () {
        return `${key} ${this.age} yaşında. ${this.skills} biliyor.`
    }
}


for (let key in users) {
    console.log(users[key].print())
}