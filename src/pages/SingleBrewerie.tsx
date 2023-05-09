import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 import { getById } from '../adapters/Requests'
import { GetBrewerieType } from '../types/ApiTypes'

export const SingleBrewerie = () => {
    const { id } = useParams()
    const [data,setData] = useState<GetBrewerieType>({
        id: '',
        name: '',
        brewery_type: '',
        address_1: "",
        address_2: "",
        address_3: "",
        city: "",
        state_province: "",
        postal_code: "",
        country: "",
        longitude: "",
        latitude: "",
        phone: "",
        website_url: "",
        state: "",
        street: ""
    })
    const [error,setErrorMessage] = useState<any>(null)

    useEffect(() => {
        try{
            const getData = async () => {                              
                        if(id) {
                        const da = await getById(id)
                        setData(da)
                    }            
                }
        getData()
        }catch(error: unknown){
            // const throwError = error as AxiosError           
            setErrorMessage(error)           
        }
    },[id])

  return (        
        <aside>
            <h1 style={{justifyContent: 'center'}}>{data.name}</h1>           
            <p>Brewery Type: {data.brewery_type}</p>
            <p>Address: {data.address_1}</p>
            <p>City: {data.city}</p>
            <p>State: {data.state}</p>
            <p>Postal Code: {data.postal_code}</p>
            <p>Country: {data.country}</p>
            {data.latitude?<p>Coordinates: {data.latitude}, {data.longitude}</p>:null}
            {data.phone?<p>Contact No: {data.phone}</p>:null}
            {data.website_url?<p>Website Link: {data.website_url?data.website_url: 'Not Available'}</p>:null}
        </aside>       
  )
}

