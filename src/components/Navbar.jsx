import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [inputValue , setInputValue]= useState("")
  
  const handleSearch = () => {
      let MovieTitle = localStorage.setItem("movieTitle",inputValue)
      console.log("title stored in localstotage"+ MovieTitle);
  };
  return (
    <nav>
      <div id="logo">
        <Link to="/">
          <h1> FlixNext </h1>
        </Link>
      </div>

      <div id="search-bar">
         <form onSubmit={handleSearch}>
              <input type="search" placeholder="Search for movies" value={inputValue}
              onChange={(e)=>{setInputValue(e.target.value)}}/>
              
              <button type="submit" > Search </button>
              
              <button type="submit" id="search-icon">
                <i class="bx bx-search-alt-2"></i>
              </button>
           </form>
      </div>

      <div id="fav-movie">
        <Link to="/favmovie"> Favorites </Link>
      </div>

      <button id="fav-icon">
        <Link to="/favmovie">
          <i class="bx bx-home-heart"></i>
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
