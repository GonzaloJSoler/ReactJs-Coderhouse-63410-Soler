import logo from '../assets/logo-peritech.png';  
import CartWidget from './CartWidget';  
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg mx-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo-Peritech"
            style={{ width: '150px' }} 
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/teclados">Teclados</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/mouses">Mouses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/monitores">Monitores</Link>
            </li>
          </ul>
        </div>

        <div className="ms-auto"> 
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;