const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]

console.log(attendances)

attendances.push(["Ali", 11], ["Veli", 7], ["Deli", 9])

console.log(attendances)


attendances[2][1]=8

console.log(`Bugün ${attendances.length} öğrenci sınıfa geldi. İlk öğencinin adı ${attendances[0][0]} ve son öğrencinin adı ${attendances[attendances.length-1][0]}` )

//Tek tek toplayarak yaş ortalaması bulma
// let yas= ((attendances[0][1]+attendances[1][1]+attendances[2][1]+attendances[3][1]+attendances[4][1]+attendances[5][1]+attendances[6][1]+attendances[7][1]+attendances[8][1])/attendances.length).toFixed(2)

// console.log(yas)


//For döngüsü ile yaş ortalaması bulma
let yas=0;

for (let i = 0; i < attendances.length; i++) {
  yas += attendances[i][1];
}

console.log(`Öğrencilerin yaş ortalaması ${(yas/attendances.length).toFixed(2)}`)


//Arrayin ilk elemanını çıkarma
attendances.shift()

console.log(attendances)


attendances.splice(2,1)

console.log(attendances)


console.log(`${attendances.length} öğrenciyle dersi bitirdik`)