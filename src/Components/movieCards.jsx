
import { MovieCard } from "./movieCard";

export function MovieCards(props){

    const {movies = []} = props

    return (
        <div className="movies">
            {movies.length ? movies.map((item)=>{
                return <MovieCard key={item.imdbID} {...item}/>
            }) : <h4>Not found</h4>
        }
        </div>
    )
}

