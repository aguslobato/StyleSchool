  /* IMAGENES IMPORTACIONES */ 

import './styles/Estructura.css'
import './styles/Medidas.css'


/* REACT IMPORTACIONES */
import Footer from './components/Footer'
import NavBar from'./components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Cart from './components/CartWidget/Cart/Cart'
import CartContextProvider from './components/Context/CartContext';

function App() {
  return (
  <div className="App">
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/category/:categoryId" component={ItemListContainer}/>
        <Route exact path="/producto/:productId" component={ItemDetailContainer}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  </div>
  );
} 

export default App;
