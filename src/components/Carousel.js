import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {data} from '../assets/images'
import '../assets/CarouselStyle.css';

function Carousel(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        adaptiveHeight:true,
        
        
        
        responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
          
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
      
    return(
        <div style={{position:"relative", height:"fit-content",width:"70vw",padding:"10vw 10vh",marginTop:"5%",marginBottom:"5%",right:"-10vw",top:"60vh",display:"flex",flexDirection:"column"}}>
        <Slider {...settings}>
        {data.map(item=>(
        <div className="card gradient-border" key={item.id}>
            <div className="card-top">
                <img src={item.linkImg} alt={item.title}/>
                <h1>{item.title}</h1>
            </div>
            {/* <div className="card-bottom">
            <h3>{item.price}</h3>
            </div> */}
        </div>

        ))}
        </Slider>
        </div>
    );
}
export default Carousel;