import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const BannerCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={57}
      totalSlides={7}
    >
      <div className="">
        <Slider className="">
          <Slide index={0}>
            <img
              className="p-1"
              src="src/images/banners/big-phase1.jpg"
              alt="ocean floor with colorful coral and a happy shark"
            />
          </Slide>
          <Slide index={1}>
            <img
              className="p-1"
              src="src/images/banners/big-crepes.jpg"
              alt="crepes"
            />
          </Slide>
          <Slide index={2}>
            <img
              className="p-1"
              src="src/images/banners/big-shinkansen.jpg"
              alt="ocean floor with colorful coral and a happy shark"
            />
          </Slide>
          <Slide index={3}>
            <img
              className="p-1"
              src="src/images/banners/dropped_phone.png"
              alt="ocean floor with colorful coral and a happy shark"
            />
          </Slide>
          <Slide index={4}>
            <img
              className="p-1"
              src="src/images/banners/lbjp2_banner_cover_02.jpg"
              alt="ocean floor with colorful coral and a happy shark"
            />
          </Slide>
          <Slide index={5}>
            <img
              className="p-1"
              src="src/images/banners/big-beach-light.png"
              alt="ocean floor with colorful coral and a happy shark"
            />
          </Slide>
          <Slide index={6}>
            <img
              className="p-1"
              src="src/images/banners/big-beach-dark.png"
              alt="ocean floor with colorful coral and a happy shark"
            />
          </Slide>
        </Slider>
      </div>
      <div className="gap-6 flex justify-center ">
        <div>
          <ButtonBack className="font-notosansJP text-lg font-bold text-jade-200 bg-jade-600 hover:text-jade-500 hover:bg-neutral-50 w-16 rounded-md pb-1">
            &lt;
          </ButtonBack>
        </div>
        <div>
          <ButtonNext className="font-notosansJP text-lg font-bold text-jade-200 bg-jade-600 hover:text-jade-500 hover:bg-neutral-50 w-16 rounded-md pb-1">
            &gt;
          </ButtonNext>
        </div>
      </div>
    </CarouselProvider>
  );
};

export default BannerCarousel;
