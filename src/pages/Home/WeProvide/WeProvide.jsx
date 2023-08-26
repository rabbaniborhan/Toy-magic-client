import saving from "../../../assets/wallet.png"
import delivary from "../../../assets/delivery.png"
import warranty from "../../../assets/warranty.png"
import support from "../../../assets/support.png"

const WeProvide = () => {
    return (
        <div className="w-4/5 my-14 mx-auto flex flex-col md:flex-row justify-between items-center">
           <div>
            <img src={saving} className="w-28 h-28 " alt="" />
            <h2 className="font-bold text-center text-lg">Big Saving</h2>
            <p className="text-gray-400 text-center text-base font-normal">Saving in every order</p>
           </div>
           <div>
            <img src={delivary}  className="w-28 h-28 " alt="" />
            <h2 className="font-bold text-center text-lg">Easy & free delivery</h2>
            <p className="text-gray-400 text-center text-base font-normal">All time delivery</p>
           </div>
           <div>
            <img src={warranty}  className="w-28 h-28 " alt="" />
            <h2 className="font-bold text-center text-lg">Premium warranty</h2>
            <p className="text-gray-400 text-center text-base font-normal">100% quality</p>
           </div>
           <div>
            <img src={support}  className="w-28 h-28 " alt="" />
            <h2 className="font-bold text-center text-lg">Online support</h2>
            <p className="text-gray-400 text-center text-base font-normal">24/7 support</p>
           </div>
        </div>
    );
};

export default WeProvide;