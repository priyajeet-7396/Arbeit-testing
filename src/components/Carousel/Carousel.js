import { useState, useRef, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setautoplay] = useState(true);
  const timeOutRef = useRef(null);

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    timeOutRef.current = autoPlay && setTimeout(() => slideRight(), 2500);
    return () => clearTimeout(timeOutRef.current);
  }, [current, autoPlay, images.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setautoplay(false);
        clearTimeout(timeOutRef.current);
      }}
      onMouseLeave={() => {
        setautoplay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel_card ${
              index === current ? 'carousel_card-active' : ''
            }`}
          >
            <img className="card_image" src={image.image} alt="" />
            <div className="card_overlay">
              <h2 className="card_title">{image.title}</h2>
              <p>{image.body}</p>
            </div>
          </div>
        ))}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${
                index === current ? 'pagination_dot-active' : ''
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;


// import { useState, useRef } from 'react';
// import './Carousel.css';
// import { useEffect } from 'react';

// const Carousel = ({images}) => {
//     const [current, setCurrent] = useState(0);
//     const [autoPlay, setautoplay] = useState(true);
//     const timeOutRef = useRef(null);

//     useEffect(() => {
//         timeOutRef.current = autoPlay && setTimeout(() => {slideRight()}, 2500);
//         return () => clearTimeout(timeOutRef.current);
//     }, [current, autoPlay]);

//     const slideRight = () => {
//         setCurrent(current == images.length - 1 ? 0 : current + 1);
//     }

//     const slideLeft = () => {
//         setCurrent(current == 0 ? images.length - 1 : current - 1);
//     }

//     return (
//         <div className='carousel'
//             onMouseEnter={() => {setautoplay(false); clearTimeout(timeOutRef.current)}}
//             onMouseLeave={() => {setautoplay(true)}}>
//             <div className='carousel_wrapper'>
//                 {images.map((image, index) => {
//                     return (
//                         <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
//                             <img className='card_image' src={image.image} alt='' />
//                             <div className='card_overlay'>
//                                 <h2 className='card_title'>
//                                     {image.title}
//                                 </h2>
//                                 <p>
//                                     {image.body}
//                                 </p>
//                             </div>
//                         </div>
//                     )
//                 })}
//                 <div className='carousel_arrow_left' onClick={slideLeft}>
//                     &lsaquo;
//                 </div>
//                 <div className='carousel_arrow_right' onClick={slideRight}>
//                     &rsaquo;
//                 </div>
//                 <div className='carousel_pagination'>
//                     {images.map((_, index) => {
//                         return (
//                             <div key={index} className={index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick={() => setCurrent(index)}>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Carousel;




// old code
// import { useState } from 'react'
// import './Carousel.css'
// import { useEffect } from 'react'

// const Carousel = ({images}) => {
//     const [current, setCurrent ] =useState(0)
//     const [autoPlay,setautoplay] = useState (true)
//     let timeOut = null ;

//     useEffect(() =>{
//         timeOut = autoPlay && setTimeout(() =>{slideRight()},2500);
//     });
    
//     const slideRight = () => {
//         setCurrent(current == images.length -1 ? 0 : current + 1) 
//     }

//     const slideLeft = () => {
//         setCurrent(current == 0 ? images.length -1 : current - 1) 
//     }


//   return (
//     <div className='carousel' onMouseEnter={() => {setautoplay (false); clearTimeout(timeOut)}} onMouseLeave={ ( ) => {setautoplay (true)}}>
//     <div className='carousel_wrapper'>


//         {images.map((image,index)=>{
//             return(
//                 <div key ={index} className={index==current
//                  ? "carousel_card carousel_card-active" : "carousel_card"}>
                
//                     <img  className='card_image' src={image.image} alt='' />
//                     <div className='card_overlay'>
//                         <h2 className='card_title'>
//                         {image.title}
//                         </h2>
//                         <p>
//                             {image.body}
//                         </p>
//                     </div>
//                 </div>
//             )
//         })}
//         <div className='carousel_arrow_left' onClick={slideLeft}>
//             &lsaquo;
//         </div>
//         <div className='carousel_arrow_right' onClick={slideRight}>
//             &rsaquo;
//         </div>
//         <div className='carousel_pagination'>
//                 {images.map((_,index) =>{
//                     return(
//                         <div key ={index} className={index==current
//                  ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick={() =>setCurrent(index)}>

//                         </div>
//                     )
//                 })}
//         </div>
//         </div>
//     </div>
//   ) 
// }

// export default Carousel









