import {useEffect,useState } from "react";
// import MovieList from "./MovieList";
const Favorites = () => {
    let[fav , setFavorites] = useState(null);

    useEffect(()=>{
        setFavorites(JSON.parse(localStorage.getItem("fav")))
    } , [])
    return ( 
        <div>
           {
            fav &&
            // <MovieList movies={fav}/>
            fav.map((m) =>{
                return (
                    <div>
                        <img src={m.Poster}></img>

                    </div>
                )
            })
           }
        </div>
     );
}
 
export default Favorites;