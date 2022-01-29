const recipeContainer = document.querySelector('.recipe');

const minus = document.getElementById("minus")
const plus = document.getElementById("plus")

import {addShopping} from "./listView.js"
import {addFavorites} from "./likeView.js"

let servings = 0
let key =true

//-----------------------------------------------------------

export const showRecipe = recipe => {

    if (key) {
        servings = recipe.servings
        key = false
    }

    document.querySelector(".recipe__img").src = recipe.image_url
    document.querySelector(".recipe__img").alt = recipe.title
    document.querySelector(".recipe__title").innerHTML = `<span>${recipe.title}</span>`
    document.querySelector(".recipe__info-data--minutes").innerHTML = recipe.cooking_time
    document.querySelector(".recipe__info-data--people").innerHTML = servings
    document.querySelector(".recipe__by").innerHTML = recipe.publisher
    document.querySelector("#direction").href = recipe.source_url
    document.querySelector(".recipe__ingredient-list").innerHTML = recipe.ingredients.map(item => {
        return ` <li class="recipe__item">
            <svg class="recipe__icon">
                <use href="img/icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__count">${item.quantity>0?item.quantity:""}</div>

            <div class="recipe__ingredient">
                <span class="recipe__unit">${item.unit}</span>
                ${item.description}
            </div>
            </li>`
    }).join("")

};

//---------------------------------------------------------------------


document.querySelector(".recipe__love")


//---------------------------------------------------------------------


plus.onclick = () =>{
    servings++
    console.log("plus",servings)
    showRecipe(recipe)

}

minus.onclick = () =>{
    servings--
    console.log("minus",servings)
    showRecipe(recipe)

}