import { Link } from 'react-router-dom'
import './Home.css'

function NavBarProductos (){
    return (
        <div className="navProductos">
             <ul className="nav nav-pills justify-content-center">
                 <li className="nav-item">
                     <Link className="nav-link active" aria-current="page" to="/">Products</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" to="/contact">Contact</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" to="/contact">About Us</Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" to="/">Home</Link>
                 </li>
             </ul>
        </div>
    )
}
export default NavBarProductos