

function TodoItem(props){
    return(
        <li className="To-do-Item">
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    );
}

export { TodoItem };