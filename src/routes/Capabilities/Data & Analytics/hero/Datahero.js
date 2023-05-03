import video from '../../../../assets/video-2.mp4'
import './datahero.css'

const datahero = () => {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>data into insights</h1>
      <p>Empowering businesses with data analytics</p>
    </div>
  )
}

export default datahero