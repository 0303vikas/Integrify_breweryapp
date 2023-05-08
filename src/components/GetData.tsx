import React, { useEffect, useState } from "react";
import { getBrewerie } from "../adapters/Requests";
import { GetBrewerieType } from "../types/ApiTypes";
import { withLoading } from "./withLoading";
import { useNavigate } from "react-router-dom";


const GetData = (props: {data: GetBrewerieType[],nextBtn:JSX.Element | null,prevBtn: JSX.Element | null}) => {

    let navigate = useNavigate()

    const redirectToBreweriePage = (id: string) => navigate(`brewerie/${id}`)

    
       
    
  return ( 
  <div>{
    props.data.map((item, index) => <a onClick={() => redirectToBreweriePage(item.id)}><p key={item.id}>{item.name}</p></a>)
  }
  {props.nextBtn}
  {props.prevBtn}
  

    </div>)}

export const DataPage = withLoading(GetData)
