import Timer from "./Timer/Timer";
import img from "../../../assets/toys.jpg"


const Discount = () => {
    return (
        <div className="bg-pink-200 my-16">
            <div className="flex py-16 w-4/5 mx-auto justify-center items-center">
                <div className="w-1/2 pr-6">
                    <img src={img} className="h-72 rounded-md" alt="" />
                </div>
                <div className="pl-6 ">
                    <h1 className="font-bold text-3xl pb-4">Deal of the day</h1>
                    <h4 className="font-semibold ml pb-4">Sale upto 40% Discount</h4>
                    <Timer duration={2 * 24 * 60 * 60 * 1000}></Timer>
                    <button  className=" mt-4 py-2 px-5 rounded-md bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 outline-none border-none text-white font-bold"> Shop Now </button>

                </div>
            </div>
        </div>
    );
};

export default Discount;