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
 import Contact from './components/Home/Contact'

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
             <Route exact path="/cart">
               <Cart/>
             </Route>
             <Route exact path="/contact">
               <Contact/>
             </Route>
             <Route exact path="/about">
               <Contact/>
             </Route>
           </Switch>
           <Footer/>
         </BrowserRouter>
       </CartContextProvider>
     </div>
   );
 } 

 export default App;
