import './App.css';
import AppUI from './AppUI';
import React from "react";



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
    <AppUI 
    total={total} 
    completeTodo={completeTodo} 
    searchValue={searchValue} 
    setSearchValue={setSearchValue} 
    searchedTodos={searchedTodos} 
    completeTodos={completeTodos} 
    deleteTodos={deleteTodos}/>
  );
}

export default App;
