
import { Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar} from './components/Navbar';
import './style.css'


function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={ <ItemListContainer/>}/> 
          <Route exact path='/itemDetail' element ={<ItemDetailContainer/>}/> 
        </Routes>
    
    </>
   
        

  );
}

export default App;
