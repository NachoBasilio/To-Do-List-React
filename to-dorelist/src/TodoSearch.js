import React, { Fragment } from "react";
import "./TodoSearch.css"

export default function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event)=>{
    setSearchValue(event.target.value)
  }

  return (
    <Fragment>
    <input className="Input" onChange={onSearchValueChange} placeholder="¿Que vas a hacer hoy?"/>
    <p>{searchValue}</p>
    </Fragment> 

  )
}
