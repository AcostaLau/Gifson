
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ItemListContainer } from './components/ItemListContainer';
import { TrendingGifs } from './components/TrendingGifs';
import './style.css'


function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route exact path='/trending' element={<TrendingGifs/>}/>
          <Route exact path='/' element={ <ItemListContainer/>}/> 
        </Routes>
    
    </>
   
        

  );
}

export default App;
