import { loginIntro } from "@/data/loginIntro";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Slider from "react-slick";
const SliderLogin = () => {
  const loginIntroData = loginIntro.data;
  const [activeSlideExclusive01, setActiveSlideExclusive01] = useState(0);

  const settingsLoginIntro = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: React.SetStateAction<number>) =>
      setActiveSlideExclusive01(next),
  };
  const slidesExclusiveRef = useRef<Slider>(null);
  const nextExclusive = () => {
    slidesExclusiveRef?.current?.slickNext();
  };
  const prevExclusive = () => {
    slidesExclusiveRef?.current?.slickPrev();
  };

  let slidesExclusiveCount = activeSlideExclusive01 + 1;
  let slidesExclusiveCountString = slidesExclusiveCount.toString().length;
  return (
    <div className="slider-login">
      <Slider
        ref={slidesExclusiveRef}
        {...settingsLoginIntro}
        className="slider-login__list"
      >
        {loginIntroData.map((item: any) => (
          <div className="slider-login__item" key={item.id}>
            {item.text}
          </div>
        ))}
      </Slider>
      <div className="slider-login__tools">
        <div className="slider-login__number">
          <span className="slider-login__current">
            {slidesExclusiveCountString === 1 ? "0" : ""}
            {activeSlideExclusive01 + 1}
          </span>
          <span className="slider-login__line"></span>
          <span className="slider-login__total">
            {slidesExclusiveCountString === 1 ? "0" : ""}
            {loginIntroData.length}
          </span>
        </div>
        <div className="slider-login__group-button">
          <button
            className="slider-login__button --prev"
            disabled={activeSlideExclusive01 === 0}
            onClick={() => prevExclusive()}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </button>
          <button
            className="slider-login__button --next"
            disabled={activeSlideExclusive01 === loginIntroData.length - 1}
            onClick={() => nextExclusive()}
          >
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderLogin;
