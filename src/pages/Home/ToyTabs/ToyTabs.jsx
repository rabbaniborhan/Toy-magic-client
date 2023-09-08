import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyTab from "./ToyTab";
import {AiFillCar} from "react-icons/ai"
import {FaRobot} from "react-icons/fa"
import {BsBicycle} from "react-icons/bs"
import {GiBearFace} from "react-icons/gi"
import {BiFootball} from "react-icons/bi"


const ToyTabs = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(`https://toys-maker-server.vercel.app/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const car = toys.filter((toy) => toy.category == "car");
  const Truck = toys.filter((toy) => toy.category == "Truck");
  const Regular = toys.filter((toy) => toy.category == "Regular");
  const Mini = toys.filter((toy) => toy.category == "Mini");

  console.log(Truck);

  return (
    <div className=" ">
      <div className="text-center  text-stone-700 ">
        <h1 className="text-5xl font-bold ">Categories</h1>
        <p className="text-xl font-semibold pt-2 text-stone-400  ">They play, study a bit, then play again, and communicate with each <br /> other.

</p>
      </div>
      <div className="py-6">
        <Tabs className="">
          <TabList className="  flex items-center justify-evenly  py-8  my-3">
            <Tab className="border flex font-semibold rounded-md bg-pink-600 transition-all duration-500 hover:text-blue-400 text-2xl items-center  text-black border-gray-400 py-2 px-8">
             <span className="bg-white rounded-full p-2"><AiFillCar color="#db2778" size={35}></AiFillCar></span> <span className="ml-3">Car</span>
            </Tab>
            <Tab className="border flex font-semibold  rounded-md bg-pink-600 transition-all duration-500 hover:text-blue-400 text-2xl items-center  text-black border-gray-400 py-2 px-8">
            <span className="bg-white rounded-full p-2"><FaRobot color="#db2778" size={35}></FaRobot></span> <span className="ml-3">Robot</span>
            </Tab>
            <Tab className="border flex font-semibold  rounded-md bg-pink-600  transition-all duration-500 hover:text-blue-400 text-2xl items-center  text-black border-gray-400 py-2 px-8">
            <span className="bg-white rounded-full p-2"><BsBicycle color="#db2778" size={35}></BsBicycle></span><span className="ml-3">Bicycle</span>
            </Tab>
            <Tab className="border flex font-semibold  rounded-md bg-pink-600  transition-all duration-500 hover:text-blue-400 text-2xl items-center  text-black border-gray-400 py-2 px-8">
            <span className="bg-white rounded-full p-2"><GiBearFace color="#db2778"size={35}></GiBearFace></span> <span className="ml-3">Teddy</span>
            </Tab>
            <Tab className="border flex font-semibold  rounded-md bg-pink-600 transition-all duration-500 hover:text-blue-400 text-2xl items-center  text-black border-gray-400 py-2 px-8">
            <span className="bg-white rounded-full p-2"><BiFootball color="#db2778" size={35}></BiFootball></span><span className="ml-3">Ball</span>
            </Tab>
          </TabList>
          <TabPanel className="   px-20 ">
            <ToyTab items={car}></ToyTab>
          </TabPanel>
          <TabPanel>
            <ToyTab items={Truck}></ToyTab>
          </TabPanel>
          <TabPanel>
            <ToyTab items={Regular}></ToyTab>
          </TabPanel>
          <TabPanel>
            <ToyTab items={Mini}></ToyTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ToyTabs;
