
export const galleryIndex = (res, category)=>{
    let {products} = res.data
    let plantilla = "";
    products.forEach((value,index) => {
        plantilla += /*html*/`
        <div class="item4">
        <div class="columna">
               <div class="productos">
                    <div class="images">
                        <img id="photo" src="storage/img/STK072_VRG_Illo_N_Barclay_8_netflix.jpg">
                        <img id="corazon" src="storage/img/heart (1).svg">
                    </div>
                    <h4 id="modern">Netflix por 30 dias</h4>
                    <p id="dres">Con garantía</p>
                    <div class="cont">
                        <div class="conthijos1">
                            <h4 id="price">$15.000</h4>
                        </div>
                        <div class="conthijos">
                            <img id="star" src="storage/img/star.svg">
                            <p id="calificacion">5.0</p>
                        </div>
                    </div>
                </div> 
            </article>
        
       `;
    });
    return plantilla
}
