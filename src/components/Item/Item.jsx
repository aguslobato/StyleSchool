import '../Item/Item.css'
import { Link } from "react-router-dom";

 const Item = ({ prod }) => {
    return (
         <div className="LibroItem">
             <div className="LibroHeadItem">
                 <Link to={`/producto/${prod.id}`}><img src={prod.image} alt={prod.title} /></Link>
             </div>
             <div className="LibroBodyItem">
                 <h3>{prod.title}</h3>
                 <span>Autor: {prod.autor}</span>
                 <Link to={`/producto/${prod.id}`}>Detalles del Libro</Link>            
                 <div className="LibroFooterItem">
                     <span className="precio">Precio: USD$ {prod.price}</span>
                     <span>Stock disponible: {prod.stock}</span>
                 </div>
             </div>
         </div>
    );
};
export default Item