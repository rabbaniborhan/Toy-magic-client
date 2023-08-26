import img from "../../../assets/Bruder.png"
const Banner = () => {
  return (
    <div className=" bg-cyan-300">
      <div className="flex lg:flex-row flex-col py-8 justify-around  px-10 items-center">
        <div className=" pl-10 w-1/2">
          <h1 className="font-bold  pb-5 text-4xl">Pick the best toy <br /> for <span className="text-pink-600">your kids</span></h1>
          <p className="pb-5 font-medium text-orange-500">The newest  Mixies toy, the Crystal Ball <br />promises to combine the fun</p>
          <button className=" py-2 px-3 bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 rounded-md font-semibold text-white ">Shop now !</button>
        </div>
        <div className="w-1/2">
          <img
            src={img}
            className=" h-[410px] "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
