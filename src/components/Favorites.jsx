import {useEffect,useState } from "react";
import MovieList from "./MovieList";
const Favorites = () => {
    let[fav , setFavorites] = useState(null);

    useEffect(()=>{
        setFavorites(JSON.parse(localStorage.getItem("fav")))
    } , [])
    return ( 
        <div>
           {
            fav &&
            <MovieList movies={fav}/>
           }
        </div>
     );
}
 
export default Favorites;