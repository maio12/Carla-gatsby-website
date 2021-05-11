import React from 'react';
import Slider from "react-slick";
import sliderStyles from "./slider.module.scss";
import { professions } from '../utils/constants';


const WordSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
  };
  return (
    <div className={sliderStyles.container}>
      <Slider {...settings}>
        {professions.map((prof, i) => {
          return (
            <div className={sliderStyles.items} key={i}>
              <h2>{prof === 'a mother of 3' ? (<span role="img" aria-label="baby, son, daughter">{prof} 🙋‍♀️ 🙋 🙋‍♂️</span>) : prof
            }</h2>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

export default WordSlider;

