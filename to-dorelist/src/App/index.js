import './App.css';
import React, { Fragment } from "react";
import CreateTodoButton from "../CreateTodoButton/index";
import { TodoCounter } from "../TodoCounter/index";
import { TodoItem } from "../TodoItem";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";



const defaultlista = [
  {text: 'Hacer cosas', completed: false, key:1},
  {text: 'Hacer Tareas', completed: false, key:2},
  {text: 'Hacer Esao', completed: false, key:3},
  {text: 'Hacer Esso', completed: false, key:4},
  {text: 'Hacer Eseo', completed: false, key:5}
]

function App() {
  //Buscador de todos
  const [todoValue, setTodoValues] = React.useState(defaultlista)
  const [searchValue, setSearchValue] = React.useState("")

  const completeTodo = todoValue.filter(todo => !!todo.complete).length
  const total = todoValue.length

  let searchedTodos = []

  if(!searchValue.length >= 1) {
    searchedTodos = todoValue
  }else{
    searchedTodos = todoValue.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })

  }

  //Completar todos

  const completeTodos = (id)=>{
    const indiceTodoACompletar = todoValue.findIndex(todo => todo.key === id)
    const newTodos = [...todoValue]
    newTodos[indiceTodoACompletar].completed = true
    setTodoValues(newTodos)
    console.log(todoValue)
  }

  //Eliminar
  const deleteTodos = (id)=>{
    const indiceTodoACompletar = todoValue.findIndex(todo => todo.key === id)
    const newTodos = [...todoValue]
    newTodos.splice(indiceTodoACompletar,1)
    setTodoValues(newTodos)
  }

  return(
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
  );
}

export default App;
