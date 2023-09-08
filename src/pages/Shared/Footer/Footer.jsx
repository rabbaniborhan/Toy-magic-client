import img from "../../../assets/toyeLogo.png";
import img1 from "../../../assets/footer/footer1.png";
import img2 from "../../../assets/footer/footer2.png";
import img3 from "../../../assets/footer/footer3.png";
import img4 from "../../../assets/footer/footer4.png";

const Footer = () => {

 
  return (
    <footer className="">
      <div className="footer p-10  ">
        <div className="">
          <img src={img} className="w-40" alt="" />
          <p className="text-gray-500 font-medium">
            We sell high-quality toys for kids of any age. <br /> Bring
            happiness to your children with <br /> our help. Purchase
            interesting toys <br /> using a special discount.
          </p>
        </div>
        <div>
          <span className="font-bold text-stone-700 text-xl pb-6">
            Information
          </span>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            About Us
          </a>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            Contact Us
          </a>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            Privacy Policy
          </a>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            Terms & Conditions
          </a>
        </div>
        <div>
          <span className="font-bold text-stone-700  text-xl pb-6">
            Why Buy From Us
          </span>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            Shipping & Delivery{" "}
          </a>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            Secure Payment
          </a>
          <a className="font-medium text-gray-400 hover:text-pink-500">FAQ</a>
          <a className="font-medium text-gray-400 hover:text-pink-500">
            Terms Of Use
          </a>
        </div>
        <div>
          <h4 className="font-bold text-stone-700   text-xl pb-6">
            Keep In Touch
          </h4>
          <input
            type="email"
            className="p-4 border border-yellow-400 focus:border-yellow-400 rounded-full bg-stone-50 w-60 "
            placeholder="Enter your e-mail  here *"
            required
          />
          <input
            type="submit"
            className="py-4 px-14 mt-4 text-white font-bold hover:bg-pink-500 transition-all duration-500 rounded-full bg-yellow-400"
            value="Subscribe"
          />
        </div>
      </div>

      <div className="bg-[#A586D9]  p-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="flex text-white font-medium" >&copy;  
            {new Date().getFullYear()} <span className="hover:text-black ml-1">All rights reserved</span>
            </span>
          </div>
          <div className="flex">
            <img className="mr-3 hover:scale-110 transition-all duration-[0.8]" src={img1} alt="" />
            <img className="mr-3 hover:scale-110 transition-all duration-[0.8]" src={img2} alt="" />
            <img className="mr-3 hover:scale-110 transition-all duration-[0.8]" src={img3} alt="" />
            <img className="mr-3 hover:scale-110 transition-all duration-[0.8]" src={img4} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
