const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

attendances.push(["Ali", 11], ["Veli", 7], ["Deli", 9])

console.log(attendances)

console.log(attendances.indexOf([2]["Elamin"]))

console.log(attendances[3][1])

attendances[3][1]=8


console.log(`Bugün ${attendances.length} öğrenci sınıfa geldi. İlk öğencinin adı ${attendances[0][0]} ve son öğrencinin adı ${attendances[attendances.length-1][0]}` )

let yas= ((attendances[0][1]+attendances[1][1]+attendances[2][1]+attendances[3][1]+attendances[4][1]+attendances[5][1]+attendances[6][1]+attendances[7][1]+attendances[8][1])/attendances.length).toFixed(2)

console.log(yas)



attendances.shift()

console.log(attendances)


attendances.splice(2,1)

console.log(attendances)


console.log(`${attendances.length} öğrenciyle dersi bitirdik`)