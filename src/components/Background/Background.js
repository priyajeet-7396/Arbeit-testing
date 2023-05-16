import './Background.css';
import video from '../../assets/video-4.mp4';

const Background = ({ tagline }) => {
    return (
        <div className="hero-container">
          <video autoPlay muted loop className="background-video">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>The Future Is Knocking, Are You Ready?</h1>
          <h5>{tagline}</h5>
          <p>Arriving Shortly</p>

        </div>
      );
    }

export default Background;
