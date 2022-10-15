import "./TodoList.css"

export default function TodoList(props) {
  return (
    <section className="To-do">
        <ul>
            {props.children}
        </ul>
    </section>
  )
}
