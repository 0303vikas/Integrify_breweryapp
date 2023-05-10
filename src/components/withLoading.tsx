/**
 * @file withLoading
 * @description function that waits for fetched data and loading it
 * @Author Vikas singh
 */
import React, { useEffect, useState } from 'react'
import { GetBrewerieType } from '../types/AdapterRequests'
import { getBrewerie } from '../adapters/requests'
import { useOutletContext } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { DisplayDataProps } from '../types/DisplayDataProps'

/**
 * @description a middle function checks if api data is loaded * 
 * @param : (props: object) => JSX.Element
 * - props.data contains data array
 * - props.nextBtn and props.preBtn handles pagination
 * - props.pageNo passes page No  
 * @returns JSX.element for rendering 
 * @notes
 * - useOutletContext to getsearchString and reorder the data accordingly using useEffect hook
 */
export const withLoading = (DisplayData: (props:DisplayDataProps) => JSX.Element) => {
    return () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data,setData] = useState<GetBrewerieType[]>([])
    const [errorMessage,setErrorMessage] = useState<any>(null)
    const {searchString} = useOutletContext<any>()
    const [pageNo,setPageNo] = useState(1)   

    useEffect(() => {
        try{
            /**
             * Fetches api data and set the State
             */
            const getData = async () => {
                let urlPara = {
                    by_name: searchString,
                    per_page: '10',
                    page: pageNo
                }
                const da = await getBrewerie(urlPara)
                setData(da)
                setIsLoading(false)                
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
    /**
     * If current page ===1 hide prevBtn
     * if current page number of breweries < 10 hide nextBtn
     */
    const PrevBtn = pageNo>1?<button className="btn--next" onClick={previousPage}><FontAwesomeIcon color="#d4af37" icon={faArrowLeft} border  /></button>:null 
    const NextBtn = data.length<10?null:<button className="btn--pre" onClick={nextPage}><FontAwesomeIcon color="#d4af37"  icon={faArrowRight} border /></button>
    
    if(isLoading) return <h1>Loading...</h1>
    if(errorMessage) return <h1>{errorMessage}</h1>
    return <DisplayData data={data} nextBtn={NextBtn} prevBtn={PrevBtn} pageNo={pageNo} /> } 

}