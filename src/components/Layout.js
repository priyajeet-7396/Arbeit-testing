import { Outlet } from 'react-router-dom';
import Header from '../components/Navbar/Header';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div className='page' >
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
