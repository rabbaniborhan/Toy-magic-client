import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../../assets/BrandSlider/slide1.png";
import img2 from "../../../assets/BrandSlider/slide2.png";
import img3 from "../../../assets/BrandSlider/slide3.png";
import img4 from "../../../assets/BrandSlider/slide4.png";
import img5 from "../../../assets/BrandSlider/slide5.png";

const animation = { duration: 80000, easing: (t) => t };
const Brands = () => {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 4 },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <div>
      <div className="text-center  mt-16 text-stone-700 ">
        <h1 className="text-5xl font-bold ">Brands</h1>
        <p className="text-xl font-semibold pt-2 text-stone-400  ">
          We have developed different programs for different ages and skill
          levels. <br /> Check them out below and contact us for more details.
        </p>
      </div>

      <div className="w-4/5 mb-24 mt-12 mx-auto">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img src={img1} alt="" />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={img2} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={img3} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={img4} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
