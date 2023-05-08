import React, { useEffect, useState } from 'react'
import { GetBrewerieType } from '../types/ApiTypes'
import { getBrewerie } from '../adapters/Requests'
import { AxiosError } from 'axios'
import { useOutletContext } from 'react-router-dom'



export const withLoading = (GetData: (props: {data: GetBrewerieType[], nextBtn: JSX.Element | null, prevBtn: JSX.Element | null}) => JSX.Element) => {
    return () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data,setData] = useState<GetBrewerieType[]>([])
    const [errorMessage,setErrorMessage] = useState<any>(null)
    const {searchString} = useOutletContext<any>()
    const [pageNo,setPageNo] = useState(1) 
    // console.log(searchString+'string')  
   

    useEffect(() => {
        try{
            console.log('this is initiated')

            const getData = async () => {
                let urlPara = {
                    by_name: searchString,
                    per_page: '10',
                    page: pageNo
                }               
            
            const da = await getBrewerie(urlPara)
            setData(da)
            setIsLoading(false)
            console.log(da)
        }
        getData()

        }catch(error: unknown){
            // const throwError = error as AxiosError           
            setErrorMessage(error)
            setIsLoading(true)
            
        }
        

    },[searchString,pageNo])

   

     
    

    const previousPage = () => setPageNo(pageNo-1)
    const nextPage = () => setPageNo(pageNo+1)

    const PrevBtn = pageNo>1?<button onClick={previousPage}>Previous</button>:null 
    const NextBtn = data.length<10?null:<button onClick={nextPage}>Next</button>
    

    if(isLoading) return <h1>Loading...</h1>
    if(errorMessage) return <h1>{errorMessage}</h1>
    return <GetData data={data} nextBtn={NextBtn} prevBtn={PrevBtn} /> } 

}