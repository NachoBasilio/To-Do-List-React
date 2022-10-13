import "./TodoItem.css"

export function TodoItem(props){
    return(
        <li className="To-do-Item">
            <span className="completado">✓</span>
            <p className="tarea">{props.text}</p>
            <span className="equis">X</span>
        </li>
    );
}
