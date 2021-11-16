 import ItemCount from '../ItemCount/ItemCount'
 import '../ItemDetail/ItemDetail.css'
 import logo from '../images/imagesHome/logo.jpg'
 import { Link } from 'react-router-dom';
 import { useState } from "react";
 import swal from "sweetalert";
 import { useCartContext } from '../Context/CartContext';

     const ItemDetail = ({itemDetail}) => {
         const [count] = useState(1);     
         const [, setQuantity] = useState (1);
         const {addToCartList} = useCartContext();
      
         const addToCart = (qty) => {
             setQuantity(qty);
             addToCartList({itemDetail, quantity: qty});
             swal(`Añadido al carrito ${itemDetail.title} | Cantidad: ${qty}`,{ 
                 buttons: false,
                 timer: 2000,
                 icon: "success",
              });
        }
 
     return (
         <div className="LibroDetail">
             <div className="LibroDetailContenedor">
                 <div className="LibroHeadDetail">
                     <img src={itemDetail.image} alt={itemDetail.title} />
                 </div>
                 <div className="LibroBodyDetail">
                     <h2>{itemDetail.title}</h2>
                     <span>Autor: {itemDetail.autor}</span>
                     <p>{itemDetail.description}</p>           
                     <div className="LibroFooterDetail">
                         <span className="precio">Precio: USD$ {itemDetail.price}</span>
                         <ItemCount initial={count} stock={itemDetail.stock} itemDetail={itemDetail} addToCart={addToCart} />
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
                         <li>{itemDetail.primerCaracteristica}</li>
                         <li>{itemDetail.segundaCaracteristica}</li>
                         <li>{itemDetail.tercerCaracteristica}</li>
                     </ul>    
                 </div> 
             </div>  
         </div>
    );
};   
 export default ItemDetail