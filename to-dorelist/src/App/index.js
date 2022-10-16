import './App.css';
import AppUI from './AppUI';
import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(()=>{
    try{
      setTimeout(()=> {
      
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
      
      
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
        },2000)
    }catch(e){
      setError(e)
    }
  })


  const saveItems = (newItems) => {
    try {
      const stringifiedItems = JSON.stringify(newItems)
      localStorage.setItem(itemName, stringifiedItems)
      setItem(newItems)
    } catch (error) {
      setError(error)
    }
  }
  return {
    item,
    saveItems,
    loading,
    error,
  };
}


function App() {
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


  return(
    <AppUI 
    loading={loading}
    error={error}
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
