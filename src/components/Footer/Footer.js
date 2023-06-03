
import { Link } from "react-router-dom"
import Logo from '../../assets/logo_icon.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import {FaYoutube} from 'react-icons/fa'
import './Footer.css'




const Footer = () => {
  return (
    <footer>
    <hr className="line" />
        <div className="container footer__container">
        <article>
        <div className="social_icon">
            <Link to = "/" className="Footer_logo">
            <div  className="image" >
                <img src={Logo} alt="Footer Logo"  />
                </div>
            </Link>
           
            <div className="join_us">
        <Link  className="txt" to="join">Contact Us</Link>
        </div>  
      </div>
      <div className="social_icon">
      <div className="footer__socials">
            <a href="https://www.linkedin.com/company/arbeitassociates/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100081945938792" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
            <a href="https://twitter.com/arbeitasso" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
            <a href="https://www.youtube.com/channel/UCvJiOFfF7WXscr8fdSq3Cpw" target="_blank" rel="noreferrer noopener"><FaYoutube/></a>
            </div>
    </div>
      <div className="Adress">
      <p>
            Privacy Policy  .  Terms of Use
            </p>
            
      </div>
           
        </article>
        
        <article>
            <h4 className="link-title">Capabilities</h4>
            <Link className="footer-menu-link" to="dataAnalytics">Digital Transformation & AI</Link>
            <Link className="footer-menu-link" to="https://www.arbeit.co.in/hr/">Human Capital</Link>
            <Link className="footer-menu-link" to="TransformationandChangeManagement">Transformation and Change Management</Link>   
        </article>
        <article>
            <h4 className="link-title">Industry</h4>
            <Link className="footer-menu-link" to="agriculture">Agriculture</Link>
            <Link className="footer-menu-link" to="finance">Banking & Finance</Link>
            <Link className="footer-menu-link" to="banking">Infrastructure</Link>
            <Link className="footer-menu-link" to="education">Capital Market</Link>
        </article>
        <article>
            <h4 className="link-title" >Solutions</h4>
            <Link className="footer-menu-link" to="finTex">FinTex</Link>
            <Link className="footer-menu-link" to="earth">Human Capital</Link>
            <Link className="footer-menu-link" to="earth">Capital Market</Link>
            <Link className="footer-menu-link" to="earth">RegTech</Link>
        </article>
        <article>
            <h4 className="link-title">About</h4>
     
        </article>
        </div>
        <hr className="line" />
        <div className="footer__copyright">
            <small>2023 ARBEIT &copy; All Right Reserved</small>
        </div>
    </footer>
  )
}

export default Footer
