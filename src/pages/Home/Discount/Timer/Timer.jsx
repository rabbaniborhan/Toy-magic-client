import { useEffect, useState } from "react";


const Timer = ({duration}) => {
    const [time , setTime]= useState(duration);

    useEffect(()=>{
        setTimeout(()=>{
            setTime(time-1000)
        },1000)
    },[time])

    const getFormattedTime = (milliseconds)=>{
        let total_second = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_second / 60));
        let total_hours = parseInt (Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_second % 60);
        let minutes = parseInt( total_minutes % 60);
        let hours = parseInt ( total_hours %24)

        return(
            <div className="flex ">
               <div className="text-center mr-6">
                <p className="py-2 px-3 text-white font-bold bg-pink-600 rounded-md">0{days}</p>
                <p className="text-pink-600 font-semibold">Days</p>
               </div>
               <div  className="text-center mr-6">
                <p className="py-2 px-3 text-white font-bold bg-pink-600 rounded-md">{hours}</p>
                <p  className="text-pink-600 font-semibold">Hours</p>
               </div>
               <div  className="text-center mr-6">
                <p className="py-2 px-3 text-white font-bold bg-pink-600 rounded-md">{minutes}</p>
                <p className="text-pink-600 font-semibold">Mins</p>
               </div>
               <div  className="text-center mr-6">
                <p className="py-2 px-3 text-white font-bold bg-pink-600 rounded-md">{seconds}</p>
                <p className="text-pink-600 font-semibold">Sec</p>
               </div>

            </div>
        )
        
    }
    return (
        <div>
           {getFormattedTime(time)}
        </div>
    );
};

export default Timer;