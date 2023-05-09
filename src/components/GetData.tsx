import React from "react"
import { GetBrewerieType } from "../types/ApiTypes"
import { withLoading } from "./withLoading"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


const GetData = (props: {data: GetBrewerieType[],nextBtn:JSX.Element | null,prevBtn: JSX.Element | null, pageNo: number}) => {    
    let navigate = useNavigate()
    const redirectToBreweriePage = (id: string) => navigate(`brewerie/${id}`)    
    return ( 
    <div>
        <ul>
            <li><b>Brewery Name</b></li>
            <li><b>City</b></li>
            <li><b>State</b></li>
            <li><b>Country</b></li>
        </ul>
        {
        props.data.map((item, index) => <a onClick={() => redirectToBreweriePage(item.id)}>
            <ul>        
                <li key={item.id}>{item.name}</li>
                <li key={item.id+1}>{item.city}</li>
                <li key={item.id+2}>{item.state_province}</li>
                <li key={item.id+3}>{item.country}</li>
                <FontAwesomeIcon style={{width: '4vw',padding: '1em 0'}}  icon={faArrowRight} beat />
            </ul>
        </a>)
        }
        <div className="pagination">
            {props.prevBtn}  
            <p className="pagination--number">{props.pageNo}</p>
            {props.nextBtn}  
        </div>
    </div>)}

export const DataPage = withLoading(GetData)
