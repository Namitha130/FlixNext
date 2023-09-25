import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let searchword = useRef("");
  let [title , setTitle] = useState("")

  const handleSearch = () => {
    fetch(`https://www.omdbapi.com/?t=${searchword.current.value}&apikey=2b393686`)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        console.log(d);
        setTitle(d)
      });
  };
  return (
    <nav>     
      <div id="logo">
        <Link to="/">
          <h1> FlixNext </h1>
        </Link>
      </div>

      <div id="search-bar" >
        <input type="search" placeholder="Search for movies" ref={searchword} />
        <i class="bx bx-search"></i>
        <button type="submit" onClick={() => handleSearch()}>Search</button>

      </div>

      <div id="fav-movie">
        <Link to="/favmovie"> Favorites </Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
