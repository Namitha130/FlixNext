import { useEffect,useState} from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
function Home() {
  var [movies, setMovies] = useState([])
  let [title, setTitle] = useState(null)
  
    useEffect(()=>{
      // creating fav array in a local storage
      if(!localStorage.getItem("fav"))
      {
        localStorage.setItem("fav","[]")
      }

      // fetching an API 
      fetch(`http://www.omdbapi.com/?t=${title}&apikey=2b393686`)
      .then((res) =>{return res.json()})
      .then((data)=>{
        console.log(data);
        setMovies(data);
        // setTitle("Virupaksha")
      })  
    },[title])

    return (
      <div className="Home-page">    
      {title === null ?
           <MovieList/> 
           :
           <MovieDetails movies={movies}/>
          
      }
         
      </div>
    );
  }
  
  export default Home;