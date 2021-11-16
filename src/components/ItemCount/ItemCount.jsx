 import { useState } from "react";
 import './ItemCount.css'
 import '../ItemDetail/ItemDetail'
 import { Link } from "react-router-dom";


 const ItemCount = ({initial, stock, addToCart}) => {
   //Variables de estado
   const [count, setCount] = useState(initial);
   const [button, setButton] = useState(false);

   const addToCartHandler = () => {
     addToCart (count);
     setButton(true);
  }
   //Renderizado del componente
   return (
     button
     ?
       <div className="itemCount">
         <Link className="finalizarCompra" to="/cart">Finalizar Compra</Link>
         <Link className="seguirComprando" to="/">Seguir Comprando</Link>
       </div>
     : 
       <div className="item-count">
         <button disabled={count === initial} onClick={()=>setCount(count - 1)}>-</button>
         <span>{count}</span>
         <button disabled={count === stock} onClick={()=>setCount(count + 1)}>+</button>
         <span className="stock-disponible">Disponibles: {stock}</span>
         <button onClick={addToCartHandler}>Agregar al carrito</button>      
       </div>
  )
}
  
 export default ItemCount;