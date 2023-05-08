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
            console.log(da)

            }
            
        }
        getData()

        }catch(error: unknown){
            // const throwError = error as AxiosError           
            setErrorMessage(error)
           
            
        }
    },[id])
  return (
    <div>{
        data.name
      }</div>
  )
}

