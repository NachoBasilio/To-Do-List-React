import "./TodoItem.css"

export function TodoItem(props){




    return(
        <li className="To-do-Item">
            <span className="completado" onClick={props.onComplete}>✓</span>
            <p className={props.completed ? "TextoCompletado tarea": "tarea"} >{props.text}</p>
            <span className="equis" onClick={props.onDelete}>X</span>
        </li>
    );
}
