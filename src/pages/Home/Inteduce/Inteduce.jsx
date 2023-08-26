import ghughra from "../../../assets/ghughra-removebg-preview.png"
import doremon from "../../../assets/doremon-removebg-preview.png"
import cractus from "../../../assets/cractus-removebg-preview.png"
import robot from "../../../assets/robot-removebg-preview.png"

const Inteduce = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl pt-24 pb-12">We would love to introduce</h1>
            <div className="flex w-4/5 mx-auto justify-between">
                <div className="p-4">
                    <img src={ghughra} className="w-[380px] h-[220px] " alt="" />
                    <h1 className="font-semibold text-gray-400 text-lg">Grughra Sound</h1>
                    <p><del className="text-gray-400">RS. 100.00</del><span className="text-pink-500 ml-2 font-semibold">RS. 95.00</span></p>
                </div>
                <div className="p-4">
                    <img src={doremon} className="w-[380px] h-[220px] " alt="" />
                    <h1 className="font-semibold text-gray-400 text-lg"> Original Toys</h1>
                    <p><del className="text-gray-400">RS. 450.00</del><span className="text-pink-500 ml-2 font-semibold">RS. 420.00</span></p>
                </div>
                <div className="p-4">
                    <img src={cractus} className="w-[380px] h-[220px] " alt="" />
                    <h1 className="font-semibold text-gray-400 text-lg">Bullet Gaming </h1>
                    <p><del className="text-gray-400">RS. 390.00</del><span className="text-pink-500 ml-2 font-semibold">RS. 370.00</span></p>
                </div>
                <div className="p-4">
                    <img src={robot} className="w-[380px] h-[220px]" alt="" />
                    <h1 className="font-semibold text-gray-400 text-lg">Robot Gaming</h1>
                    <p><del className="text-gray-400">RS. 760.00</del><span className="text-pink-500 ml-2 font-semibold">RS. 780.00</span></p>
                </div>
            </div>

            <div className=" flex items-center justify-center  mt-6">
                <button className=" py-2 px-5 rounded-md bg-indigo-400 hover:bg-indigo-500 transition-all duration-300 outline-none border-none text-white font-bold">View All</button>
            </div>
            
        </div>
    );
};

export default Inteduce;