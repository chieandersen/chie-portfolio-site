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
      <div className=""></div>
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
