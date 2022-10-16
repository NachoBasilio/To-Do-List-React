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
        setError(true)
      }
    })
  
  
    const saveItems = (newItems) => {
      try {
        const stringifiedItems = JSON.stringify(newItems)
        localStorage.setItem(itemName, stringifiedItems)
        setItem(newItems)
      } catch (e) {
        setError(true)
      }
    }
    return {
      item,
      saveItems,
      loading,
      error,
    };
  }

  export {useLocalStorage}