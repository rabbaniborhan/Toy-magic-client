import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../../assets/customer/person1.jpg";
import img2 from "../../../assets/customer/person2.jpeg";
import img3 from "../../../assets/customer/person4.png";
import img4 from "../../../assets/customer/persont3.jpg";

const Review = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,

      slides: {
        perView: 2,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div>
      <div className="bg-pink-200 px-12 pt-8 pb-12">
        <div>
          <h1 className="text-4xl mb-8 text-center font-bold text-stone-600">
            Review of Customer
          </h1>
        </div>
        <div ref={sliderRef} className="keen-slider w-4/5 mx-auto">
          <div className="keen-slider__slide number-slide1  bg-pink-200">
            <div className="m-3 rounded bg-white p-6">
              <div className="flex items-center">
                <img className="w-20 h-20 m-3 rounded" src={img1} alt="" />
                <h3 className="font-semibold text-stone-600 text-xl"> Jhonn</h3>
              </div>
              <div>
                <p className="m-3  text-stone-600">
                  My son started at Dance Studio at the beginning of the year.
                  We were all a bit anxious to move him into a new environment,
                  but it was the best decision we have made !
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1   bg-pink-200">
            <div className="m-3 bg-white rounded p-6">
              <div className="flex items-center">
                <img className="w-20 h-20 rounded m-3" src={img4} alt="" />
                <h3 className="font-semibold text-stone-600 text-xl">Harry</h3>
              </div>
              <div>
                <p className="m-3  text-stone-600">
                  My son started at Dance Studio at the beginning of the year.
                  We were all a bit anxious to move him into a new environment,
                  but it was the best decision we have made !
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1   bg-pink-200">
            <div className="m-3 bg-white rounded p-6">
              <div className="flex items-center">
                <img className="w-20 h-20 rounded m-3" src={img2} alt="" />
                <h3 className="font-semibold text-stone-600 text-xl">Sarah Johnson</h3>
              </div>
              <div>
                <p className="m-3  text-stone-600">
                  My son started at Toy magic at the beginning of the year.
                  We were all a bit anxious to move him into a new environment,
                  but it was the best decision we have made !
                </p>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1   bg-pink-200">
            <div className="m-3 bg-white rounded p-6">
              <div className="flex items-center">
                <img className="w-20 h-20 rounded m-3"src={img3} alt="" />
                <h3 className="font-semibold text-stone-600 text-xl">Mildred Bates</h3>
              </div>
              <div>
                <p className="m-3  text-stone-600">
                  My son started at Dance Studio at the beginning of the year.
                  We were all a bit anxious to move him into a new environment,
                  but it was the best decision we have made !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
