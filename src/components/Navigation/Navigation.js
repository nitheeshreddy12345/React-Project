import { Link } from 'react-router-dom';
import './Navigation.css'

  function Navbar() {
  return (
    <nav className="nav">
      <img src='/logo.webp' alt='logo'/>
      <ul className="nav-links" type='none'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/connections'>Connections</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
