

const ShopByAge = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl py-10">Shop By Age</h1>
           <div className="age bg-no-repeat bg-cover bg-fixed   ">

           <div className="grid w-4/5 py-20 mx-auto gap-8 grid-cols-5">
           <div className="bg-white py-10 rounded-md text-center font-bold text-lg">
                <p>0 - 5</p>
                <p>Month</p>
            </div>
            <div className="bg-white py-10 rounded-md text-center font-bold text-lg">
                <p>5 - 10</p>
                <p>Month</p>
            </div>
            <div className="bg-white py-10 rounded-md text-center font-bold text-lg">
                <p>10 -12</p>
                <p>Month</p>
            </div>
            <div className="bg-white py-10 rounded-md text-center font-bold text-lg">
                <p>1 - 2</p>
                <p>Year</p>
            </div>
            <div className="bg-white py-10 rounded-md text-center font-bold text-lg">
                <p>2 - 4</p>
                <p>Year</p>
            </div>
           </div>

           </div>
        </div>
    );
};

export default ShopByAge;