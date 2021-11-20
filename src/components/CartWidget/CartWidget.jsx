 import { Link } from 'react-router-dom';
 import { useCartContext } from '../Context/CartContext';
 import carrito from '../images/imagesHome/carrito.svg'
 import './CartWidget.css'

 function CartWidget() {
     const {itemQuantity} = useCartContext()
     return (
         <div className="CartWidget">
             <div className="Carrito">
                 <div className="CarritoContenedor">
                     <Link className="nav-link" to={"/cart"}>
                         <img src={carrito} alt="carrito"/><span>{itemQuantity}</span>
                     </Link>
                 </div>
             </div>
         </div>                
    );
 }
 export default CartWidget; 