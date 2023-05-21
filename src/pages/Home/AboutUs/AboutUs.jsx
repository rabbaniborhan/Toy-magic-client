import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      
      <div className="w-4/5 mx-auto ">
        <div className="flex my-20 items-center lg:flex-row flex-col">
          <div className="basis-1/2">
            {" "}
            
              <img
                src="https://media.istockphoto.com/id/176794190/photo/little-boy-in-a-toy-car.jpg?s=612x612&w=is&k=20&c=njDvG5Rnpsyc40Zq9pQgk-UMDiFSHtk7sUTFKB9g57s="
                className="w-96  rounded-full"
                alt=""
              />
            
          </div>
          <div className="basis-1/2">
            <h1 className="text-4xl font-serif font-bold py-4">
              Sound familar?If so ,this experience is for you
            </h1>
            <p>- you are to busy to prepare media</p>
            <p>
              - you'd other spend time with your family or doing something you
              have{" "}
            </p>
            <p>- you want healthly,home cooled media</p>
            <p>- you are want to experiance somet hing defferent</p>

            <button className="btn bg-gradient-to-r btn-primary from-indigo-600 to-purple-600 outline-none my-4">
              choose a plan
            </button>
          </div>
        </div>

        <div className="my-24">
          <div className="flex items-center lg:flex-row flex-col">
            <div className="basis-1/2 p-10">
              <h1 className="text-5xl font-serif font-bold text-center text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text py-5">
                About Us
              </h1>
              <p className="font-serif italic">
              Toys cars are miniature replicas of real cars designed for play and enjoyment. They are popular among children and even some adults who collect and enjoy playing with them. Here are some key points about toy cars:
              </p>
            </div>
            <div className="basis-1/2">
              {" "}
              <img
                src="https://m.media-amazon.com/images/I/81mzApc3+BL._AC_SL1500_.jpg"
                className="rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
