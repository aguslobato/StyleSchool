 import ItemCount from '../ItemCount/ItemCount'
 import '../ItemDetail/ItemDetail.css'
 import { useState } from "react";
 import swal from "sweetalert";
 import { useCartContext } from '../Context/CartContext';
 import Zoom from 'react-reveal/Zoom';

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
             <Zoom>
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
             </Zoom>
         </div>
    );
};   
 export default ItemDetail