
import './HeroSection.css';
import video from '../../../assets/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Connecting talent with opportunity</h1>
      <p>Your future starts with us</p>
    </div>
  );
}

export default HeroSection;


