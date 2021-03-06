
import { Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { ItemListContainer } from './components/ItemListContainer';
import { TrendingGifs } from './components/TrendingGifs';
import {NavBar} from './components/Navbar'
import './style.css'


function App() {
  return (
    <>
      <NavBar/>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route exact path='/trending' element={<TrendingGifs/>}/>
          <Route exact path='/buscar-gifs' element={ <ItemListContainer/>}/> 
        </Routes>
    
    </>
   
        

  );
}

export default App;
