 import { Link } from 'react-router-dom';
 import { useCartContext } from '../Context/CartContext';
 import './CartWidget.css'

 function CartWidget() {
     const {itemQuantity} = useCartContext()
     return (
         <div className="CartWidget">
             <div className="Carrito">
                 <div className="CarritoContenedor">
                     <Link className="nav-link" to={"/cart"}>
                         <i className="fas fa-cart-plus"><span>{itemQuantity}</span></i>
                     </Link>
                 </div>
             </div>
         </div>                
    );
 }
 export default CartWidget; 