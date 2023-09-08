import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="w-4/5 mx-auto ">
        <div className="py-12">
          <div className="flex items-center lg:flex-row flex-col">
            <div className="basis-1/2">
              <img
                src="https://m.media-amazon.com/images/I/81mzApc3+BL._AC_SL1500_.jpg"
                className="rounded-sm"
                alt=""
              />
            </div>
            <div className="basis-1/2 p-10">
              <h1 className="text-5xl font-bold text-stone-500  pb-8">
                About Us
              </h1>
              <p className="text-left text-stone-600">
                Toys cars are miniature replicas of real cars designed for play
                and enjoyment. They are popular among children and even some
                adults who collect and enjoy playing with them. Here are some
                key points about toy cars:
              </p>
              <button className="py-2 px-4 mt-8 ml-4 bg-pink-500 hover:bg-pink-600 transition-all duration-300 rounded text-white font-semibold">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
