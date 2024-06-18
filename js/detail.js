import { detailProduct } from "./components/gallery.js";
import { titleProduct, productOptions } from "./components/section.js";
import { getProduct } from "./module/detail.js";

let main__section_gallery = document.querySelector("#main__section__gallery");
let product__title = document.querySelector("#product__title");
let product__description = document.querySelector(".product__description");

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProduct({id})));
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await detailProduct(info);
    product__title.innerHTML = await titleProduct(info);
    product__description.innerHTML = await productOptions(info);
})