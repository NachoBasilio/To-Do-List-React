import React from 'react';
import { TodoContext } from "../TodoContext"
import "./TodoCounter.css"

export function TodoCounter(){
    const {total, complete} = React.useContext(TodoContext)
    return (   
        <h2 className="titulo">Has completado {complete} de {total} TODOs</h2>
    )
}
