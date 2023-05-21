import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aos = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-3/5 mx-auto my-16">
      <div data-aos="fade-up">
        <div>
            <h1 className="text-center font-bold text-3xl my-8">Customar reviews</h1>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2">
              <img
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1684678761~exp=1684679361~hmac=c2910b43b805818d04d4d5db891b3fadd73a5812ff88e11cee364c19d59fba7f"
                alt="Movie"
              />
            </figure>
            <div className="card-body w-1/2">
              <h2 className="card-title">Toy Car review to Customar</h2>
              <p>
                Super Toy Cars Offroad is an arcade racing game, developed and
                published by Eclipse Games. In it, you drive miniature sized toy
                cars in race ...
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aos;
