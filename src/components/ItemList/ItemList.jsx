 import  Item  from "../Item/Item";
 import '../ItemList/ItemList.css'
 import MapSections from "../MapSections/MapSections";
 import Presentacion from "../Home/Presentacion";
 import Contact from "../Home/Contact";
 import NavBarProductos from "../Home/NavBarProductos";

 export const ItemList = ({ product }) => {
     return (
         <section className="Principal">
             <Presentacion/>
             <NavBarProductos/>
             <div className="ContainerLibros">
                 <MapSections/>
                 <div className="ContainerLibrosContenedor">
                     {product.map((prod) => (
                         <Item key={prod.id} prod={prod} />
                     ))}
                 </div>
             </div> 
             <Contact/>
         </section>        
    );
 };