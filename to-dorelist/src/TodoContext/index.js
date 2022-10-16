import React from "react";
import { useLocalStorage} from "./useLocalStorage.js"

const TodoContext = React.createContext()

function TodoProvider(props){
    const {
        item: todoValue,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      
    
      //Buscador de todos
     
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
        saveTodos(newTodos)
      }
    
      //Eliminar
      const deleteTodos = (id)=>{
        const indiceTodoACompletar = todoValue.findIndex(todo => todo.key === id)
        const newTodos = [...todoValue]
        newTodos.splice(indiceTodoACompletar,1)
        saveTodos(newTodos)
    }
    

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            total, 
            completeTodo,
            searchValue, 
            setSearchValue, 
            searchedTodos,
            completeTodos, 
            deleteTodos,
        }}>
        {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}