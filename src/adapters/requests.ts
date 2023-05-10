/**
 * @file async requests * 
 * @description Collection of all api requests, fetching data with asyn/await methods * 
 * @Author Vikas Singh *  * 
 * @note All the function returns promise, which fetches the requested data
 */
import React from 'react'
import axios from "axios"
import { GetBrewerieType,GetBrewerieProps } from "../types/AdapterRequests"

const BASEURL = "https://api.openbrewerydb.org/v1/breweries"

/**
 * @description fetches list of breweries
 * @param params: - null | object 
 * - if null @return  all data on page one, with max results 10 
 * - else @return all data on params.page_no, with max results 10 
 */
export const getBrewerie = async (props?:GetBrewerieProps) => {  
    let requestData
    if(props) {
        requestData = await axios.get<GetBrewerieType[]>(BASEURL,{params: props})        
    } else {        
        requestData = await axios.get<GetBrewerieType[]>(BASEURL)     
    }
    return requestData.data     
}

/**
 * @description fetches data with search name 
 * @param id: string
 * - append id to baseurl
 * - search results according to base url 
 */
export const getById = async(id:string) => {
    const requestData = await axios.get<GetBrewerieType>(BASEURL+`/${id}`)
    return requestData.data
}






