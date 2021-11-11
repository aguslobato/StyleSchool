import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'
import logo from '../images/imagesHome/logo.jpg'
import { Link } from 'react-router-dom';
import { useState } from "react";
import swal from "sweetalert";
import { useCartContext } from '../Context/CartContext';
import CartContextProvider from '../Context/CartContext';

    const ItemDetail = ({product}) => {
        const [count, setCount] = useState(1);
      
        const {cartList, showCartList, addItem} = useCartContext();
      
        const onAdd = (qty) => {
          setCount(qty);
          addItem({...product, quantity: qty});
          swal(`Añadido al carrito ${product.title} | Cantidad: ${qty}`,{ 
            buttons: false,
            timer: 2000,
       });
        }
    
     return (
         <div className="LibroDetail">
             <div className="LibroDetailContenedor">
                 <div className="LibroHeadDetail">
                     <img src={product.image} alt={product.title} />
                 </div>
                 <div className="LibroBodyDetail">
                     <h2>{product.title}</h2>
                     <span>Autor: {product.autor}</span>
                     <p>{product.description}</p>           
                     <div className="LibroFooterDetail">
                         <span className="precio">Precio: USD$ {product.price}</span>
                         <ItemCount initial={count} stock={product.stock} product={product} onAdd={onAdd} />
                     </div>
                 </div>
             </div>
             <div className="DetallesExtrasContenedor">
                 <div className="DetallesExtrasHead">
                     <h2>Medios de Pago</h2>
                     <span><i className="far fa-money-bill-alt"></i></span>
                     <span><i className="fas fa-money-check"></i></span>
                     <span><i className="fab fa-cc-paypal"></i></span>
                     <Link to="/"><img src={logo} alt="Logo StyleSchool" /></Link>
                 </div>  
                 <div className="DetallesExtrasBody">
                     <h4>Caracteristicas del Lenguaje</h4>
                     <ul>
                         <li>{product.primerCaracteristica}</li>
                         <li>{product.segundaCaracteristica}</li>
                         <li>{product.tercerCaracteristica}</li>
                     </ul>    
                 </div> 
             </div>  
         </div>
    );
};   
 export default ItemDetail