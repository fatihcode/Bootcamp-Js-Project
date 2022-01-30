// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');


import {renderResults} from "./searchView.js";
import {showRecipe} from "./recipeView.js";

const apiKey = "61390851-23d2-47fc-98fa-add630cf4fce"
const url = "https://forkify-api.herokuapp.com/api/v2/recipes"

// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>


// Add AJAX functions here:
const getRecipes = async () => {
    const inputValue = input.value
    const urlToFetch = `${url}?search=${inputValue}&key=${apiKey}`

    try {

        let response = await fetch(urlToFetch)

        if (response.ok) {

            let jsonResponse = await response.json()
            console.log(jsonResponse.data.recipes)
            renderResults(jsonResponse.data.recipes)
        }

    } catch (error) {
        console.log(error)
    }
}

// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>

export const getOneRecipe = async (id) => {

    const urlToFetch = `${url}/${id}?key=${apiKey}`

    try {
        let response = await fetch(urlToFetch)

        if (response.ok) {
            let jsonResponse = await response.json()
            showRecipe(jsonResponse.data.recipe)
            console.log(jsonResponse)
        }

    } catch (error) {
        console.log(error)
    }
}

//----------------------------------------------------

// submitBtn.addEventListener("click", getRecipes)
submitBtn.onclick = getRecipes

//----------------------------------------------------


input.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        getRecipes();
    }
})