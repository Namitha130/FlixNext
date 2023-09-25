import { useState,useEffect } from "react";

const MovieDetails = ({movies}) => {
let [favId, setFavId]= useState([]);
 let[altered,setAltered ]= useState(0);

 useEffect(()=>{
    let fav = JSON.parse(localStorage.getItem("fav"));
    setFavId(fav.map((m)=>{return m.imdbID}));
 },[altered]);

 let add = (movie)=>{ 
    let fav =  JSON.parse(localStorage.getItem("fav"));
    fav.push(movie);
    localStorage.setItem("fav" , JSON.stringify(fav));
    setAltered(altered+1);
 }

 let removeMovie = (id)=>{ 
    let fav =  JSON.parse(localStorage.getItem("fav"));
    fav = fav.filter((m)=>{return m.imdbID !== id })
    localStorage.setItem("fav" , JSON.stringify(fav));
    setAltered(altered+1);
 }
    return ( 
        <div className="Movie-Details">  
        <h1> <b>Movie Name : </b> { movies.Title} </h1>
         <section>
           <div className="movie-poster" >
               <img src={movies.Poster} alt=""/>
           </div>
           <div className="movie-content">
               <p> <b>Awards : </b> { movies.Awards} </p>
               <p> <b>Director : </b> {movies.Director} </p>
               <p> <b>Casts : </b> { movies.Actors} </p>
               <p> <b>Release Year : </b> {movies.Year} </p>
               <p> <b>Languages : </b> { movies.Language} </p>
               <p id="genre"> <b>Genre  : </b> {movies.Genre} </p>
               <p> <b>Duration : </b> {movies.Runtime} </p>
               <p> <b>Plot :</b> { movies.Plot} </p>

               {
                 favId.includes(movies.imdbID)? 
                 <div id="remove-btn" onClick={()=>{removeMovie(movies.imdbID)}}> <i class='bx bxs-heart' style={{color:"#df00ff"}}></i> <h6>Remove from Favorites</h6></div>
                 :
                 <div id="add-btn" onClick={()=>{add(movies)} }> <i class='bx bx-heart'></i> <h6> Add to Favorites</h6> </div>
              }
           </div> 
         </section>
     </div>
     );
}
 
export default MovieDetails;