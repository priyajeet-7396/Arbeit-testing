import Navbar from './Navbar/Navbar';
// ...
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
        <img src={logo}  className='logo_img' alt='navlogo' />
    
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
