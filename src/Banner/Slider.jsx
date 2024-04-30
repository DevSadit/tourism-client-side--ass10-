import { CCarousel, CCarouselCaption, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
const Slider = () => {
  return (
    <div className="mt-5">
      <CCarousel controls indicators>
        <CCarouselItem>
          <img
            className="d-block w-100 relative rounded-lg"
            src="slider1.jpg"
            alt="slide 1"
          />
          <CCarouselCaption class="d-none d-md-block ">
            <h5 className="md:absolute text-[#B5C0D0] md:text-7xl text-xl text-center md:bottom-96 md:px-36">
              Unlock new experiences and cultural treasures with TrekTide where
              <br />
              every discovery awaits.
            </h5>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img
            className="d-block w-100 rounded-lg"
            src="slider2.jpg"
            alt="slide 2"
          />
          <CCarouselCaption class="d-none d-md-block">
            <h5 className="md:absolute text-[#B5C0D0] md:text-7xl text-xl text-center md:bottom-96 md:px-36">
              Unlock new experiences and cultural treasures with TrekTide where
              <br />
              every discovery awaits.
            </h5>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <img className="d-block rounded-lg" src="slider3.jpg" alt="slide 3" />
          <CCarouselCaption class="d-none d-md-block">
            <h5 className="md:absolute text-[#B5C0D0] md:text-7xl text-xl text-center md:bottom-96 md:px-36">
              Unlock new experiences and cultural treasures with TrekTide where
              <br />
              every discovery awaits.
            </h5>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Slider;
