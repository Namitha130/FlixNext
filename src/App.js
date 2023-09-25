import Home from "./components/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>    
          
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/favmovie" element={<Favorites/>}/>
          
        </Routes>
    
      </div>
    </BrowserRouter>
    
  );
}

export default App;
