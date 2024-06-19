export const titleProduct = async({ data:data__detail } = res)=>{
    return /*html*/`
        <article class="product__detail">
            <div class="detail__main">
                <h1>${data__detail.product_title}</h1>
                <div class="product__cuantity">
                    <img id="btn_minus" src="../storage/img/minus.svg">
                    <span>1</span>
                    <img id="btn_plus" src="../storage/img/plus.svg" alt="">
                </div>
            </div>
            <div class="star__score">
                ${new Array(parseInt(data__detail.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
                <span>${data__detail.product_star_rating}</span>
                <a href="${data__detail.product_url}">(${data__detail.product_num_ratings} reviews)</a>
            </div>
        </article>`;
}
export const productOptions = async(res)=>{
    let {data} = res;
    let {
        category_path,
        about_product,
        product_details,
        product_information,
        product_photos,
        product_variations,
        rating_distribution,
        review_aspects,
        ...data__detail
    } = data;
    let string1 = data__detail.product_description.slice(0, 165);
    let string2 = data__detail.product_description.slice(166);
  

    return /*html*/`
    <details>
        <summary>${(data__detail.product_description.length >= 165) ? string1+"..." : string1}</summary>
        <p>${string2}</p>
    </details>`;
}