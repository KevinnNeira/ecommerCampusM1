import {headers} from "../components/env.js";

export const getAllProductsName = async({search:text}={search:"Phone"})=>{
    console.log("ESperando...");
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search?query=Phone&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
    const options = {
        method: 'GET',
        headers
        }
        let res = await fetch(url,options);
        let data =res.json
        return data;
    };
