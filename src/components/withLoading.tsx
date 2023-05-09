import React, { useEffect, useState } from 'react'
import { GetBrewerieType } from '../types/ApiTypes'
import { getBrewerie } from '../adapters/Requests'
import { useOutletContext } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'



export const withLoading = (GetData: (props: {data: GetBrewerieType[], nextBtn: JSX.Element | null, prevBtn: JSX.Element | null,pageNo: number}) => JSX.Element) => {
    return () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data,setData] = useState<GetBrewerieType[]>([])
    const [errorMessage,setErrorMessage] = useState<any>(null)
    const {searchString} = useOutletContext<any>()
    const [pageNo,setPageNo] = useState(1)   

    useEffect(() => {
        try{
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
    const PrevBtn = pageNo>1?<button className="btn--next" onClick={previousPage}><FontAwesomeIcon color="#d4af37" icon={faArrowLeft} border  /></button>:null 
    const NextBtn = data.length<10?null:<button className="btn--pre" onClick={nextPage}><FontAwesomeIcon color="#d4af37"  icon={faArrowRight} border /></button>

    if(isLoading) return <h1>Loading...</h1>
    if(errorMessage) return <h1>{errorMessage}</h1>
    return <GetData data={data} nextBtn={NextBtn} prevBtn={PrevBtn} pageNo={pageNo} /> } 

}