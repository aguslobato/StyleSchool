import { Link } from 'react-router-dom'
import './Home.css'
import Zoom from 'react-reveal/Zoom';

function NavBarProductos (){
    return (
        <div className="navProductos">
             <Zoom>
                 <ul className="nav nav-pills justify-content-center">
                     <li className="nav-item">
                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/contact">Contact</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/contact">About Us</Link>
                     </li>
                 </ul>
             </Zoom>
        </div>
    )
}
export default NavBarProductos