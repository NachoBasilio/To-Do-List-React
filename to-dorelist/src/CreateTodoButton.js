import "./CreateTodoButton.css"

export default function CreateTodoButton() {
  const onClickButton = (Mensaje)=>{
    alert(Mensaje)
  }


  return (
    <button 
    className="Buton"
    onClick={()=>{onClickButton("Bueeenas")}}
    >
    AGREGAR 
    </button>
  )
}
