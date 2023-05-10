/**
 * @file DisplayData
 * @description DisplayArea for all the breweries on the home page + pagination handling function
 * @Author Vikas Singh 
 * @note
 * - component is passed to withLoading page 
 * - after loading is finished, this display will handle data rendering on home page
 */
import React from "react"
import { withLoading } from "./withLoading"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { DisplayDataProps } from "../types/DisplayDataProps"

/**
 * @description Displays data fetched from getData api, Clicking on each breweri redirects to particual brewerie page
 * @param props: Object 
 * - props.data: array 
 * - @function props.preBtn 
 * - @function props.nextBtn
 * - props.pageNo: number
 * @returns 
 * - JSX.element
 * @notes 
 * - maps over data and renders it
 * - handle redired to single brewerie page by OnClick event on mapped elements
 * - next and previous page 
 */
const DisplayData = (props: DisplayDataProps) => {    
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

export const DataPage = withLoading(DisplayData) // assign DisplayData after passing through withLoading function
