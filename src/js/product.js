import { fetchData } from "./fetchData.js"

import { showProduct } from "./updateUI.js";


const pueryString = window.location.search;

const id = new URLSearchParams(pueryString).get("id")

fetchData("https://dummyjson.com/product/" + id)



    .then((product) => {
        console.log(product);
        const img = document.querySelector('img')
        const h2  = document.querySelector('h2')
        const h3 = document.querySelector('h3')
        const p = document.querySelector('p')
        const span2 = document.querySelector('#span')
        const span = document.querySelector('span')

        const h4 = document.querySelector('h4')


        img.src = product.thumbnail
        h2.textContent  = product.title
        h3.textContent  = `Price: $${product.price}`
        p.textContent = product.description
        span2.textContent = `id:${product.id}`
        span.textContent = `id: ${product.id}`
        h4.textContent = product.category




    })
    .catch((error) => {
        console.log(error)
        
    })
    

    const html = document.documentElement;

const modeToggler = document.getElementById("mode-toggler");

const themeFromLocalStorage = localStorage.getItem("theme");

if (themeFromLocalStorage) {
  html.dataset.theme = themeFromLocalStorage;
}

 modeToggler.addEventListener("click", () => {
  html.dataset.theme = html.dataset.theme == "light" ? "dracula" : "light";
  localStorage.setItem("theme", html.dataset.theme);
});

