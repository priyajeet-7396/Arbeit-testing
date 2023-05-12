
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
            <h4>Capabilities</h4>
            <Link to="dataAnalytics">Data & Analytics</Link>
            <Link to="humanResourceManagement">Human Resource Management</Link>
            <Link to="TransformationandChangeManagement">Transformation and Change Management</Link>
            <Link to="DigitalInnovationandAdoption">Digital Innovation and Adoption</Link>
            <Link to="artificialIntelligence">Artificial Intelligence</Link>
        </article>
        <article>
            <h4>Industry</h4>
            <Link to="agriculture">Agriculture</Link>
            <Link to="finance">Finance</Link>
            <Link to="banking">Banking</Link>
            <Link to="education">Education</Link>
            <Link to="healthCare">Health Care</Link>
            <Link to="capitalMarket">Capital Market</Link>
        </article>
        <article>
            <h4>Products</h4>
            <Link to="finTex">FinTex</Link>
            <Link to="earth">Earth</Link>
        </article>
        <article>
            <h4>Insights</h4>
            <Link to="industryTrend">Industry Trend</Link>
            <Link to="OurThinking">Our Thinking</Link>
            <Link to="news">News</Link>
     
        </article>
        <article>
            <h4>About</h4>
            <Link to="who-we-are">WHO WE ARE</Link>
            <Link to="howwework">HOW WE WORK</Link>
            <Link to="our-culture">OUR CULTURE AND COMMITMENT</Link>
     
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
