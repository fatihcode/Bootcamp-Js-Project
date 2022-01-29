const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const start = document.getElementById("start")
const url = "https://starwars.egghead.training/";
const header = []


//-------------------------------------------------------


async function starWars(endPoint) {

  try {
    const json = await fetch(url + endPoint)
    // console.log(json)

    if (json.ok) {
      const data = await json.json()
      // console.log(data)
      return data
    }
  } catch (error) {
    console.log(error)
  }
}

// starWars("planets")
// starWars("films")


//-------------------------------------------------------


async function starWarsCount() {

  // console.log(await starWars("films"))
  // console.log(await starWars("planets"))
  // console.log(await starWars("starships"))


  const films = await starWars("films")
  const planets = await starWars("planets")
  const starships = await starWars("starships")
  const species = await starWars("species")
  const vehicles = await starWars("vehicles")
  const people = await starWars("people")

  // console.log(`There are ${films.length} films in Starwars history. There are ${planets.length} planets in Starwars history. There are ${starships.length} starship`)


  header.push(`There are ${films.length} films in Starwars history.`, `There are ${planets.length} planets in Starwars history.`, `There are ${starships.length} starship.`, `There are ${species.length} species.`, `There are ${vehicles.length} vehicles.`, `There are ${people.length} people.`)


  return starships
}


//-------------------------------------------------------


start.onclick = async () => {

  const ship = await starWarsCount()

  let i = 0

  setInterval(() => {
    output.innerHTML = header[Math.floor(Math.random() * header.length)]
    spinner.src = url + ship[i].image
    i++
  }, 3000);

}