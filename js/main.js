import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory } from "./module/app.js";


let input__search = document.querySelector("#input__search");
let main__product = document.querySelector(".main__product");
let flex__category = document.querySelector(".flex__category");

addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    flex__category.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));  
})


input__search.addEventListener("change", async e => {
    let params = new URLSearchParams(location.search);
    let data = { search : e.target.value, id: params.get('id')}
    input__search.value = null;
    let res = await getAllProductName(data)
    main__product.innerHTML = galleryIndex(res, params.get('id'));
});