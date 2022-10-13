import './App.css';
import { Fragment } from "react";
import CreateTodoButton from "./CreateTodoButton.js";
import { TodoCounter } from "./TodoCounter.js";
import { TodoItem } from "./TodoItem.js";
import TodoList from "./TodoList.js";
import TodoSearch from "./TodoSearch.js";



const lista = [
  {text: 'Hacer cosas', complete: false, key:1},
  {text: 'Hacer Tareas', complete: false, key:2},
  {text: 'Hacer Eso', complete: false, key:3}
]

function App() {
  return(
    <Fragment>
      <div className="Contenedor_De_Titulo">
        <TodoCounter/>
      </div> 
      <TodoSearch/>
      <TodoList>
        {lista.map(todo=>(
          <TodoItem  key={todo.key} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
