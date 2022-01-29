const recipesContainer = document.querySelector('.results__list');

import {getOneRecipe} from "./index.js";


export const renderResults = recipesArr => {
    console.log(recipesArr)

    let html = ""
    for (let i = 0; i < 10; i++) {
        html += `
                <li class="lst" id=${recipesArr[i].id}>
                    <a class="results__link results__link--active" href="#${recipesArr[i].id}">
                        <figure class="results__fig">
                            <img src="${recipesArr[i].image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipesArr[i].title}</h4>
                            <p class="results__author">${recipesArr[i].publisher}</p>
                        </div>
                    </a>
                </li>
                `
    }

    recipesContainer.innerHTML = html

    const listItems = document.querySelectorAll(".lst")

    for (let i = 0; i < listItems.length; i++) {

        listItems[i].onclick = () => {
            getOneRecipe(listItems[i].id)
            console.log("merhaba",listItems[i].id)
        }
    }
};