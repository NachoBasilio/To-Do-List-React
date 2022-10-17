import React, { Fragment } from "react";
import { TodoContext } from "../TodoContext"
import "./TodoSearch.css"

export default function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
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
