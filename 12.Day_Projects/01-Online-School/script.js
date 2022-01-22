class School {
    constructor(name, level, numberStudent) {
        this._name = name
        this._level = level
        this._numberStudent = numberStudent
    }
    get name() {
        return this._name
    }
    get level() {
        return this._level
    }
    get numberStudent() {
        return this._numberStudent
    }
    set numberStudent(val) {
        this._numberStudent = val
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberStudent} students at the ${this.level} school level.'`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)]
    }
}


//----------------------------------------------------


class PrimarySchool extends School {
    constructor(name, numberStudent, pickupPolicy) {

        super(name, "Primary", numberStudent)
        this._pickupPolicy = pickupPolicy
    }

    get pickupPolicy() {
        return this._pickupPolicy
    }
}



//----------------------------------------------------


class MiddleSchool extends School {
    constructor(name, numberStudent) {
        super(name, "Middle", numberStudent)
    }
}


//----------------------------------------------------


class HighSchool extends School {
    constructor(name, numberStudent, sportsTeams) {
        super(name, "High", numberStudent)
        this._sportsTeams = sportsTeams
    }
    get sportsTeams() {
        return this._sportsTeams
    }
}


//----------------------------------------------------


class SchoolCatalog {
    constructor() {
        this._myCatalog = []
    }
    get myCatalog() {
        return this._myCatalog
    }
    addSchool(school) {
        this._myCatalog.push(school)
    }
}


//----------------------------------------------------


School.pickSubstituteTeacher(['Marisol Chandler', 'Morin Marcia Walsh', 'Walton Pratt Wiley', 'Lou Williams', 'J. R. Burton', 'Allen Downs', 'Salinas Mcclain', 'Nancy Miles'])


const sierraNevada = new PrimarySchool("Sierre Nevada", 422, "Students must be picked up by a parent, guardian, or a family member over the age of 15.")

console.log(sierraNevada)


const cambridge = new MiddleSchool("Cambridge", 125)

console.log(cambridge)


const elkhart = new HighSchool("Elkhart", 515, ['Beyzbol', 'Basketbol', 'Voleybol', 'Buz Hokeyi'])

console.log(elkhart.sportsTeams)

elkhart.quickFacts()


//----------------------------------------------------


const catalog = new SchoolCatalog()

catalog.addSchool(sierraNevada)
catalog.addSchool(cambridge)
catalog.addSchool(elkhart)

console.log(catalog.myCatalog);


//----------------------------------------------------


const schoolTypeSelect = document.getElementById("schoolTypeSelect")
const titleOfSchool = document.getElementById("titleOfSchool")
const studentsNumber = document.getElementById("studentsNumber")
const pickupPolicy = document.getElementById("pickupPolicy")
const sportsTeams = document.getElementById("sportsTeams")
const schoolOverview = document.getElementById("schoolOverview")
const submit_btn = document.getElementById("submit_btn")
const catalogSchool = document.getElementById("catalogSchool")


//----------------------------------------------------


submit_btn.onclick = () => {

    if (schoolTypeSelect.value == "Primary") {

        const okul = new PrimarySchool(titleOfSchool.value, studentsNumber.value, pickupPolicy.value)

        catalog.addSchool(okul)

    } else if (schoolTypeSelect.value == "Middle") {

        const okul = new MiddleSchool(titleOfSchool.value, studentsNumber.value)

        catalog.addSchool(okul)

    } else if (schoolTypeSelect.value == "High") {

        const okul = new HighSchool(titleOfSchool.value, studentsNumber.value, sportsTeams.value)

        catalog.addSchool(okul)
    }

    catalogSchool.innerHTML = `
    <li class="list-group-item"><span class="fw-bold">School Type : </span>${schoolTypeSelect.value}</li>
    <li class="list-group-item"><span class="fw-bold">School Name : </span>${titleOfSchool.value}</li>
    <li class="list-group-item"><span class="fw-bold">Students Number : </span>${studentsNumber.value}</li>
    <li class="list-group-item"><span class="fw-bold">Pickup Policy : </span>${pickupPolicy.value}</li>
    <li class="list-group-item"><span class="fw-bold">Sporst Teams : </span>${sportsTeams.value}</li>
    <li class="list-group-item"><span class="fw-bold">Sporst Teams : </span>${schoolOverview.value}</li>`

    console.log(catalog.myCatalog);

    schoolTypeSelect.value = "Primary"
    titleOfSchool.value = ""
    studentsNumber.value = ""
    pickupPolicy.value = ""
    sportsTeams.value = ""
    schoolOverview.value = ""

}