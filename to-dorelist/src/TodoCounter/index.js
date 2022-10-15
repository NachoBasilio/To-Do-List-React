import "./TodoCounter.css"

export function TodoCounter({total, complete}){
    return (   
        <h2 className="titulo">Has completado {complete} de {total} TODOs</h2>
    )

}
