
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
            <div className="footer__socials">
            <a href="https://www.linkedin.com/company/arbeitassociates/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100081945938792" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
            <a href="https://twitter.com/arbeitasso" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
            <a href="https://www.youtube.com/channel/UCvJiOFfF7WXscr8fdSq3Cpw" target="_blank" rel="noreferrer noopener"><FaYoutube/></a>
            </div>
      </div>
        <div className="join_us">
        <Link  className="txt" to="join">Join us</Link>
        </div>      
      <div className="Adress">
      <p>
            B-231, First Floor, Greater Kailash-1 
            </p>
            <p>
            New Delhi 110048 (India) 
            </p>
            <p>
            Tel: 011-43029393
            </p>
            <p>
            Email : info@arbeit.co.in
            </p> 
      </div>
           
        </article>
        
        <article>
            <h4 className="link-title">Capabilities</h4>
            <Link className="footer-menu-link" to="dataAnalytics">Data & Analytics</Link>
            <Link className="footer-menu-link" to="https://www.arbeit.co.in/hr/">Human Resource Management</Link>
            <Link className="footer-menu-link" to="TransformationandChangeManagement">Transformation and Change Management</Link>
            <Link className="footer-menu-link" to="DigitalInnovationandAdoption">Digital Innovation and Adoption</Link>
            <Link className="footer-menu-link" to="artificialIntelligence">Artificial Intelligence</Link>
        </article>
        <article>
            <h4 className="link-title">Industry</h4>
            <Link className="footer-menu-link" to="agriculture">Agriculture</Link>
            <Link className="footer-menu-link" to="finance">Finance</Link>
            <Link className="footer-menu-link" to="banking">Banking</Link>
            <Link className="footer-menu-link" to="education">Education</Link>
            <Link className="footer-menu-link" to="healthCare">Health Care</Link>
            <Link className="footer-menu-link" to="capitalMarket">Capital Market</Link>
        </article>
        <article>
            <h4 className="link-title" >Products</h4>
            <Link className="footer-menu-link" to="finTex">FinTex</Link>
            <Link className="footer-menu-link" to="earth">Earth</Link>
        </article>
        <article>
            <h4 className="link-title">Insights</h4>
            <Link className="footer-menu-link" to="industryTrend">Industry Trend</Link>
            <Link className="footer-menu-link" to="OurThinking">Our Thinking</Link>
            <Link className="footer-menu-link" to="news">News</Link>
     
        </article>
        <article>
            <h4 className="link-title">About</h4>
            <Link className="footer-menu-link" to="who-we-are">WHO WE ARE</Link>
            <Link className="footer-menu-link" to="howwework">HOW WE WORK</Link>
            <Link className="footer-menu-link" to="our-culture">OUR CULTURE AND COMMITMENT</Link>
     
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
