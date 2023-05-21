const Banner = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col my-8 justify-around font-serif  mx-10 items-center">
        <div className="ml-16 basis-1/2">
          <h1 className=" text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-5xl font-bold italic">
            Welcome to <br /> Toy Magic{" "}
          </h1>
          <p className="p-6">
            The newest Magic Mixies toy, the Magical Crystal Ball promises to
            combine the fun, interactive features and magical elements of the
            original toy ...this is very nice toys 
          </p>
        </div>
        <div className="basis-1/2">
          <img
            src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX5231682.jpg"
            className="w-1/2 ml-32"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
