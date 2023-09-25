import { useEffect,useState } from "react";
import Pagination from "./Pagination";
import ToasterUi from 'toaster-ui';

const MovieList = () => {

   var [movies, setMovies] = useState([]) 
   let [page , setPage] = useState("1")
   let [favId, setFavId]= useState([]);
   let[altered,setAltered ]= useState(0);
   const toaster = new ToasterUi();

   //! Fetching the API for pagination by receiving pageNumber from Pagination

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=2b393686&s=movie&page=${page}`)
        .then((res) =>{return res.json()})
        .then((data)=>{
          console.log(data.Search);
          setMovies(data.Search);
        }) 
    },[page]) //whenever the page value is updated useEffect is re-render

    // ! fetching pageNumber value from Pagination
    const receivedFromChild = (data) => {
     console.log("Received from child component " + data)
     setPage(data)
    }

    //! for  Adding movie  to FavoritesList 
    useEffect(()=>{
        let fav = JSON.parse(localStorage.getItem("fav")); 
        setFavId(fav.map((m)=>{return m.imdbID
                    }));
                  },[altered]);

    let add = (movie)=>{    
        let fav =  JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        toaster.addToast("Added to Favorites");
        localStorage.setItem("fav" , JSON.stringify(fav));
        setAltered(altered+1);
        console.log(favId);
    }

    let removeMovie = (imdbID)=>{ 
        console.log(window.location.pathname)
        if(window.location.pathname === "/favmovie")
        {
            let fav =  JSON.parse(localStorage.getItem("fav"));
            fav = fav.filter((m)=>{return m.imdbID !== imdbID })
            localStorage.setItem("fav" , JSON.stringify(fav));
            setAltered(altered+1);
            toaster.addToast("Removed from Favorites");
        }
        else{
            alert("please visit Favorite page to remove")
        }
        
     }
      
    return ( 
    <div>
        <div className="movielist-page">
            {movies.map((m)=>{
                return(
                <div className="movie">  
                    {
                     favId.includes(m.imdbID)? 
                     <button className="remove-btn" onClick={()=>{removeMovie(m.imdbID)}}>
                        <i class='bx bxs-heart' style={{color:"#ba55d3"}}></i>
                     </button>
                     :
                     <button className="add-btn" onClick={()=>{add(m)} }> 
                        <i class='bx bx-heart'></i>
                     </button>
                    }

                    <img src={m.Poster} alt="poster" width="200px" height="250px" />
                    <h2>{m.Title}</h2>
                    <p> <b>Year : </b>{m.Year}</p>   
                                
                </div>
                )
            })}   
                    
        </div>
        <footer>
        <Pagination sendToParent={receivedFromChild}/>  
        </footer>
     
    </div>
    );
}
 
export default MovieList;