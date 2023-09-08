import img1 from "../../../assets/blog/blog1.jpg";
import img2 from "../../../assets/blog/blog2.jpg";
import img3 from "../../../assets/blog/blog3.jpg";
import img4 from "../../../assets/blog/blog4.jpg";

import {FaCalendarAlt} from "react-icons/fa"

const Blog = () => {
  return (
    <div className="mx-4 my-16">
      <div className="text-center text-stone-600 mt-6 mb-10">
        <h1 className="text-3xl font-bold ">Our Blog</h1>
        <p className="text-stone-500 font-medium">Read helpful articles written by our teachers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center my-6">
          <div className="w-1/2 pl-2 pr-4">
            <img className="w-full h-72 " src={img1} alt="" />
          </div>
          <div className="w-1/2 ">
            <h1 className="font-semibold text-xl mb-4 transition-all duration-300 hover:text-pink-500">The most common mistakes when managing personal</h1>
            <p className="mb-4 font-medium flex">
            <span className="mr-3 items-center"> <FaCalendarAlt></FaCalendarAlt></span>06.07.2022
            </p>
            <p className="text-gray-400 font-normal text-base">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable.
            </p>
          </div>
        </div>
        <div className="flex items-center my-6">
          <div className="w-1/2 pl-2 pr-4">
            <img className="w-full h-72" src={img2} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-xl mb-4 transition-all duration-300 hover:text-pink-500">The most common mistakes when managing personal</h1>
            <p className="mb-4 font-medium flex">
              <span className="mr-3 items-center"> <FaCalendarAlt></FaCalendarAlt></span>06.07.2022
            </p>
            <p  className="text-gray-400 font-normal text-base">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable.
            </p>
          </div>
        </div>
        <div className="flex items-center my-6">
          <div className="w-1/2 pl-2 pr-4">
            <img className="w-full h-72" src={img3} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-xl mb-4 transition-all duration-300 hover:text-pink-500">The most common mistakes when managing personal</h1>
            <p className="mb-4 font-medium flex">
            <span className="mr-3 items-center"> <FaCalendarAlt></FaCalendarAlt></span>06.07.2022
            </p>
            <p  className="text-gray-400 font-normal text-base">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable.
            </p>
          </div>
        </div>
        <div className="flex items-center my-6">
          <div className="w-1/2 pl-2 pr-4">
            <img className="w-full h-72" src={img4} alt="" />
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold text-xl mb-4 transition-all duration-300 hover:text-pink-500">The most common mistakes when managing personal</h1>
            <p className="mb-4 font-medium flex">
            <span className="mr-3 items-center"> <FaCalendarAlt></FaCalendarAlt></span>06.07.2022
            </p>
            <p  className="text-gray-400 font-normal text-base">
              The ability to manage money competently is especially valuable
              quality in the conditions of financial crisis, when the purchasing
              power of the population is shrinking, inflation is rising, and
              currency exchange rates are completely unpredictable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
