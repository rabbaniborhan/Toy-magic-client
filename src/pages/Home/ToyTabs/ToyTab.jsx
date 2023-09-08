import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const ToyTab = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-4">
        {items?.map((toy, index) => (
          <div key={index + 1} className="flex group flex-col my-6 items-center justify-center">
            <div className=" h-72 w-72 [perspective:1000px] ">
              <div className="relative h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0">
                  <img
                    src={toy.photo}
                    className="h-full w-full rounded-2xl  shadow-xl "
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 border-r-2 border-b-2 border-yellow-400 h-full w-full rounded-2xl bg-stone-400/40 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className="flex min-h-full flex-col items-center justify-center">
                   <Link to={`/toy/${toy._id}`} className="bg-pink-500 duration-300 transition-all hover:bg-pink-700 font-semibold text-xl py-2 px-4 rounded-md">Details</Link>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-center font-semibold mt-8 transition-all duration-500 group-hover:text-pink-500 text-2xl">{toy.toyname}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToyTab;
