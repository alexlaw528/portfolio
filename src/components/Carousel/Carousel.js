import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carousel = ({
  carouselImage
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const carousel = carouselImage.map((val, index) => 
    <div className="slider-div" key={`carousel__div--key${index}`}>
      <img src={val} alt={`carousel__image${index}`}/>
    </div>
  )

  return (
    <div>
      <Slider 
      {...settings}
      >
        {carousel}
      </Slider>
    </div>
  )
}

export default Carousel