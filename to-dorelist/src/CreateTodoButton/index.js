import "./CreateTodoButton.css"

export default function CreateTodoButton({setOpenModal}) {
  const onClickButton = ()=>{
    setOpenModal(true)
  }


  return (
    <button 
    className="Buton"
    onClick={()=>{onClickButton()}}
    >
    AGREGAR 
    </button>
  )
}
