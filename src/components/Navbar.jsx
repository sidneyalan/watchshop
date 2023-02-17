import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
    <div className="container">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link to={"/"} className="navbar-brand logo" title='Home' alt='Home'></Link>
    <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
<CartWidget />
    <ul className="navbar-nav">
        <li className="nav-item">
        <Link to={"/catalogue"} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
        <Link to={"/catalogue"} className="nav-link">Shop</Link>
        </li>
        <li className="nav-item">
        <Link to={"/contact"} className="nav-link">Contacto</Link>
        </li>
        <li className="nav-item dropdown">
        <Link to={"/"} className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
        </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link to={`/category/${"Casio"}`} className="dropdown-item">Casio</Link></li>
            <li><Link to={`/category/${"Citizen"}`} className="dropdown-item">Citizen</Link></li>
            <li><Link to={`/category/${"Seiko"}`} className="dropdown-item">Seiko</Link></li>
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
</div>
</>
  );
}

export default Navbar;