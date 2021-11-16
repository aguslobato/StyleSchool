 import logo from "./images/imagesHome/logo.jpg"
 import CartWidget from "./CartWidget/CartWidget";
 import { Link } from "react-router-dom";
 import './Home/Sections.css'

 function NavBar() {
     return (

     <div className="NavBar">
        
         <nav className="navbar navbar-expand-lg navbar-light">
             <div className="container-fluid">
                 <Link className="navbar-brand" to="/">StyleSchool</Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarText">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/contact">Contact</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/about">About</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to="/">Products</Link>
                         </li>
                         <li className="nav-item">
                             <CartWidget/>
                         </li>
                     </ul> 
                     <span className="navbar-text"><Link to="/"><img src={logo} alt="logo styleschool" /></Link></span>
                 </div>
                
             </div>
         </nav>

     </div>
     );
 }


 export default NavBar;