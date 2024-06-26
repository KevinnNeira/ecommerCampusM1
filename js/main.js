import { menuListCategoryIndex } from "./components/menu.js";
import { galleryIndex } from "./components/gallery.js";
import { getAllProductName, getAllCategory, getAllProductRandom } from "./module/app.js";
import { getProduct } from "./module/detail.js";


let input__search = document.querySelector("#input__search");
let main__product = document.querySelector(".main__product");
let flex__category = document.querySelector(".flex__category");

let searchProducts = async e => {
    let params = new URLSearchParams(location.search);
    let dataSearch = { search : e.target.value, id: params.get('id')}
    input__search.value = null;
    let res = ""
    if(input__search.dataset.opc == "random"){
        res = await getAllProductRandom({})
        delete input__search.dataset.opc
        history.pushState(null, "", "?id=aps");
        console.log(dataSearch);
    }
    else {
        res = await getAllProductName(dataSearch)
        console.log(dataSearch);
    }
    console.log(res);
    main__product.innerHTML = galleryIndex(res, params.get('id'));
    
    let {data: {products}} = res;
    let asin = products.map(value => {return {id: value.asin}});

    let proceso = new Promise(async(resolve, reject)=>{
        for (let i = 0; i < asin.length; i++) {
            if(localStorage.getItem(asin[i].id)) continue;
            let data = await getProduct(asin[i])
            localStorage.setItem(asin[i].id, JSON.stringify(data))
        }
        resolve({message: "Datos buscados correctamente" });
    })
    Promise.all([proceso]).then(res => {console.log(res);})

}


addEventListener("DOMContentLoaded", async e=>{
    if(!localStorage.getItem("getAllCategory")) localStorage.setItem("getAllCategory", JSON.stringify(await getAllCategory()));
    flex__category.innerHTML = menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));  
    
    history.pushState(null, "", "?id=aps");
    input__search.value = "zapato";
    const eventoChange = new Event('change');
    input__search.dispatchEvent(eventoChange);
    
})

input__search.addEventListener("change", searchProducts);