for (let key in users) {
    console.log(key)
}

for (let i in users) {
    console.log(users[i])

}
console.warn("---------------------------")
console.log(Object.values(users))

console.warn("---------------------------")

console.log(Object.values(users).length)

console.warn("---------------------------")

// console.log(users.map(item => (item.skills).length))

// let skillss = users.sort((a, b) => a.skills.length - b.skills.length)


// console.log(skillss)

let yetenek = Object.keys(users).sort((a, b) => users[b].skills.length - users[a].skills.length)

console.log(yetenek[0])

let filter50 = Object.keys(users).filter(item => [item].points > 50)

console.log(filter50)

let i = 0
for (let key in users) {

    if (users[key].points >= 50) {
        i++

    }
}

console.log(i)


let a = []

for (let key in users) {

    if (users[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
        a.push(key)
    }
}

console.log(a)


users.fatih = {
    email: 'fatih@john.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 35,
    isLoggedIn: false,
    points: 50
}


console.log(users)

console.warn("---------------------------")



for (const key in users) {
users[key].print = function () {
   return `${key} ${this.age} yaşında. ${this.skills} biliyor.`
}
}

console.log(users)
console.warn("---------------------------")

for (let key in users) {
console.log(users[key].print())
}

