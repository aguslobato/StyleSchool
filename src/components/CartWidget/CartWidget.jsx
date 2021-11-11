import { Link } from 'react-router-dom';


 function CartWidget() {
    return (

     <div className="CartWidget">
        
         <div className="Carrito">
             <div className="CarritoContenedor">
                 <Link className="nav-link" to="/cart">
                     <i className="fas fa-cart-plus"/>
                 </Link>
             </div>
         </div>

     </div>

     );

 }

 export default CartWidget;