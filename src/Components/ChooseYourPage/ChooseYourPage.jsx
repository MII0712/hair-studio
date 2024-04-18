import React from "react";
import "./ChooseYourPage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chooseyourimage from "../../Assets/ChooseYours_right.jpeg";
import chooseyourimage1 from "../../Assets/ChooseYours_left1.jpeg";
import chooseyourimage2 from "../../Assets/ChooseYours_left2.jpeg";
import chooseyourimage3 from "../../Assets/ChooseYours_left3.jpeg";
import chooseyourimage4 from "../../Assets/ChooseYours_left4.jpeg";

function ChooseYourPage() {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="choose-your-container">
      <div className="left-container">
        <div className="upper-div">
          <h1>Choose Your Option</h1>
          <p>
            Our team is extremely talented and passionate. They are also among
            the most highly trained and educated technicians in the industry.
            This ensures each and every one of our clients receives world-class
            service – each and every time. We want your experience to be unlike
            any other.
          </p>
        </div>
        <div className="slider_container">
          <Slider {...settings}>
            <div className="slider_item">
              <img src={chooseyourimage1} alt="1"></img>
            </div>
            <div className="slider_item">
              <img src={chooseyourimage2} alt="2"></img>
            </div>
            <div className="slider_item">
              <img src={chooseyourimage3} alt="3"></img>
            </div>
            <div className="slider_item">
              <img src={chooseyourimage4} alt="4"></img>
            </div>
          </Slider>
        </div>
      </div>
      <div className="right-container">
        <img src={chooseyourimage} alt="Cover" />
      </div>
    </div>
  );
}

export default ChooseYourPage;
