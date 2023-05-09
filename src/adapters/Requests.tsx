import React from 'react'
import axios from "axios"
import { GetBrewerieType } from "../types/ApiTypes"

const BASEURL = "https://api.openbrewerydb.org/v1/breweries"

export const getBrewerie = async (params?:any|null) => {  
    let requestData
    if(params) {
        requestData = await axios.get<GetBrewerieType[]>(BASEURL,{params: params})        
    } else {        
        requestData = await axios.get<GetBrewerieType[]>(BASEURL)     
    }
    return requestData.data     
}

export const getById = async(id:string) => {
    const requestData = await axios.get<GetBrewerieType>(BASEURL+`/${id}`)
    return requestData.data
}






