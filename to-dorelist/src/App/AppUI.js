import React, { Fragment } from "react";
import CreateTodoButton from "../CreateTodoButton/index";
import { TodoCounter } from "../TodoCounter/index";
import { TodoItem } from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";


export default function AppUI({total,completeTodo,searchValue,setSearchValue,searchedTodos,completeTodos,deleteTodos}) {
  return (
        <Fragment>
      <div className="Contenedor_De_Titulo">
        <TodoCounter
        total={total}
        complete={completeTodo}
        />
      </div> 
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
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
