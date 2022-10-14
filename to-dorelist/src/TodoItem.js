import "./TodoItem.css"

export function TodoItem(props){

    const onComplete = ()=>{
        alert("Ya completaste la tarea: " + props.text )
    }
    const onDelete = ()=>{
        alert("Borraste la tarea: " + props.text )
    }

    return(
        <li className="To-do-Item">
            <span className="completado" onClick={onComplete}>✓</span>
            <p className="tarea">{props.text}</p>
            <span className="equis" onClick={onDelete}>X</span>
        </li>
    );
}
