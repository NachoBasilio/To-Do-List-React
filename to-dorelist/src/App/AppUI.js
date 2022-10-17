import React, { Fragment } from "react";
import { TodoContext } from "../TodoContext";

import CreateTodoButton from "../CreateTodoButton/index";
import { TodoCounter } from "../TodoCounter/index";
import { TodoItem } from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";


export default function AppUI() {
  const {error, 
    loading, 
    searchedTodos,
    completeTodos,
    deleteTodos} = React.useContext(TodoContext)

  return (
      <Fragment>
      <div className="Contenedor_De_Titulo">
        <TodoCounter/>
      </div> 
      <TodoSearch/>      
      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map(todo=>(
          <TodoItem  
          key={todo.key} 
          completed={todo.completed} 
          onComplete = {()=>{
            completeTodos(todo.key)
          }} 
          onDelete = {()=>{
            deleteTodos(todo.key)
          }}
          text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  )
}
