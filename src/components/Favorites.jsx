import {useEffect,useState } from "react";
import ToasterUi from 'toaster-ui';

const Favorites = () => {
    let[fav , setFavorites] = useState(null);
    let [favId, setFavId]= useState([]);
   let[altered,setAltered ]= useState(0);
   const toaster = new ToasterUi();

     //! for  Adding movie  to FavoritesList 
     useEffect(()=>{
        setFavorites(JSON.parse(localStorage.getItem("fav")))

        let fav = JSON.parse(localStorage.getItem("fav")); 
        setFavId(fav.map((m)=>{return m.imdbID
                    }));
                  },[altered]);

    // let add = (movie)=>{    
    //     let fav =  JSON.parse(localStorage.getItem("fav"));
    //     fav.push(movie);
    //     toaster.addToast("Added to Favorites");
    //     localStorage.setItem("fav" , JSON.stringify(fav));
    //     setAltered(altered+1);
    //     console.log(favId);
    // }

    let removeMovie = (imdbID)=>{ 
        let fav =  JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m)=>{return m.imdbID !== imdbID })
        localStorage.setItem("fav" , JSON.stringify(fav));
        setAltered(altered+1);
        toaster.addToast("Removed from Favorites");
     }
    return ( 
        <div>
           {
            fav &&

            <div className="movielist-page">
            {   
                fav.map((f)=>{
                return(
                <div className="movie">     
                    {
                        favId.includes(f.imdbID) &&
                        <button className="remove-btn" onClick={()=>{removeMovie(f.imdbID)}}>
                        <i class='bx bxs-heart' style={{color:"#ba55d3"}}></i>
                        </button>    
                    }

                <img src={f.Poster} alt="poster" width="200px" height="250px"/>
                <h2>{f.Title}</h2>
                <p> <b>Year : </b>{f.Year}</p>                   
                </div>
                )
                })}                     
            </div>
           }
        </div>
     );
}
 
export default Favorites;