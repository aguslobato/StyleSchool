 import { useState } from "react";
 import './ItemCount.css'
 import '../ItemDetail/ItemDetail'
 import { Link } from "react-router-dom";

//  /*CONTADOR*/
//  export default function ItemCount({ stock, initial, onAdd }) {
//      const [count, setCount] = useState(initial); 
//      const [button, setButton] = useState(false);
//      function sumarProducto() {
//          setCount(count + 1);
//     }

//      function restarProducto() {
//          setCount(count - 1);
//     }
  

//      const handlerOnAdd = () => {
//          onAdd(count);
//          setButton(true);
//     }

//      return (
//          <div className="ContainerContador">
//              <h4>Unidades disponibles: {stock} </h4>
//              <h3>Cantidad de productos a seleccionar : {count} </h3>             
//              <button onClick={restarProducto} disabled={count <= initial}>{/*Forma que me dijo Fabian para mejorar el codigo y no colocar 1*/}
//                  -
//              </button>
//              {/* Resta hasta que llegue a 1 que seria la cantidad minima */}
//              <button onClick={sumarProducto} disabled={count === stock}> 
//                  +
//              </button>
//              {/* Suma hasta que llegue al stock disponible que seria la cantidad maxima */}
//              <button onClick={handlerOnAdd}>Agregar al carrito</button>  
//              {/* Te da la cantidad seleccionada */}
//          </div>
//     );
// }


const ItemCount = ({initial, stock, onAdd}) => {
    //Variables de estado
    const [count, setCount] = useState(initial);
    const [button, setButton] = useState(false);
  
    const handlerOnAdd = () => {
      onAdd(count);
      setButton(true);
    }
  
    //Renderizado del componente
    return (
      button
      ?
        <div className="item-count">
          <Link className="finalizarCompra" to="/cart">Finalizar Compra</Link>
        </div>
      : 
        <div className="item-count">
          <button disabled={count === initial} onClick={()=>setCount(count - 1)}>-</button>
          <span>{count}</span>
          <button disabled={count === stock} onClick={()=>setCount(count + 1)}>+</button>
          <span className="stock-disponible">Disponibles: {stock}</span>
          <button onClick={handlerOnAdd}>Agregar al carrito</button>      
        </div>
    )
  }
  
  export default ItemCount;