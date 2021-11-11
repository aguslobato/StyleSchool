import { Link } from 'react-router-dom';
import './MapSections.css'

 function MapSections() {
     return (
         <div className="MapSections">
             <section className="ui-search">
                 <div className="Categorias">
                     <ul>
                         <h5>Categorias</h5>
                         <li><Link to="/category/Frontend">Frontend</Link></li>
                         <li><Link to="/category/Backend">Backend</Link></li>
                         <li><Link to="/category/Ofertas">Ofertas</Link></li>
                     </ul>
                 </div>
                 <div className="CostoEnvio">
                     <ul>
                         <h5>Costo de envio</h5>
                         <li><Link to="/costoEnvio/Gratis">Gratis</Link></li>
                     </ul>
                 </div>
                 <div className="TipoEntrega">
                     <ul>
                         <h5>Tipo de entrega</h5>
                         <li><Link to="/tipoEntrega/Envio">Con envio</Link></li>
                         <li><Link to="/tipoEntrega/Full"><code><i className="fas fa-bolt"/>FULL</code></Link></li>
                     </ul>
                 </div>
                 <div className="Pago">
                     <ul>
                         <h5>Pago</h5>
                         <li><Link to="/pago/sinInteres">Sin interes</Link></li>
                     </ul>
                 </div>
                 <div className="Condicion">
                     <ul>
                         <h5>Condicion</h5>
                         <li><Link to="/condicion/Nuevo">Nuevo</Link></li>
                         <li><Link to="/condicion/Usado">Usado</Link></li>
                     </ul>
                 </div>
                 <div className="Ubicacion">
                     <ul>
                         <h5>Ubicacion</h5>
                         <li><Link to="/ubicacion/Chubut">Chubut</Link></li>
                         <li><Link to="/ubicacion/Cordoba">Cordoba</Link></li>
                         <li><Link to="/ubicacion/BuenosAires">Buenos Aires</Link></li>
                         <li><Link to="/ubicacion/SantaFe">Santa Fe</Link></li>
                     </ul>
                 </div>
             </section>         
         </div>
     );
 }
 export default MapSections

