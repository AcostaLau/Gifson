
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/Cart';
import { Error404 } from './components/Error404';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar} from './components/Navbar';
import './style.css'


function App() {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='*' element={<Error404/>}/>
          <Route exact path='/' element={ <ItemListContainer/>}/> 
          <Route exact path='/detalle/:idDetail' element={<ItemDetailContainer/>}></Route>
          <Route exact path='/cart' element={<Cart/>}></Route>
        </Routes>
    
    </>
   
        

  );
}

export default App;
