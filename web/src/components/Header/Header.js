import { Link } from 'react-router-dom';
import logoProject from "../../images/logo-adalab.png";

function Header() {
  return (
    <header className="header">
      <Link to="/" className='header__link'>
        <img src={logoProject} alt="logo de proyecto" className='header__image'></img>
      </Link>
      <h1 className='header__title'>Gestor de Proyectos Molones</h1>
      <p class="header__subtitle">
        Escaparate en línea para recoger ideas a través de la tecnología.
      </p>
    </header>
  );
}

export default Header;
