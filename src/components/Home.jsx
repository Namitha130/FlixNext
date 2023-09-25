import { useEffect,useState} from "react";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
function Home() {

  let [movies, setMovies]= useState([])
  let [title,setTitle] = useState(null) 
  
    useEffect(()=>{

      if(!localStorage.getItem("fav"))
      {
        localStorage.setItem("fav","[]")
      }

      // fetching an API 
      fetch(`https://www.omdbapi.com/?t=${title}&apikey=2b393686`)
      .then((res) =>{return res.json()})
      .then((data)=>{
        console.log(data);
        setMovies(data); 
        setTitle(localStorage.getItem("movieTitle"))
      })  
    },[title])

    return (
      <div className="Home-page">    
      {title === null ?
           
           <MovieList movies={movies}/>
           :
           <MovieDetails movies={movies}/>  
                  
      }       
      </div>
    );
  }
  
  export default Home;