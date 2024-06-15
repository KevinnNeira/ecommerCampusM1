import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory } from "./module/app.js";


let barra = document.querySelector("#barra");
let main_article = document.querySelector(".main_article");
let flex__category = document.querySelector(".flex__category");

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    flex__category.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));  
})


barra.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = { search : e.target.value, id: params.get('id')}
    barra.value = null;
    let res = await getAllProductName(data)
    main_article.innerHTML = galleryIndex(res, params.get('id'));
});