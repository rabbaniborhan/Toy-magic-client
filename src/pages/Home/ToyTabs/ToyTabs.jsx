import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyTabs = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports");

  useEffect(() => {
    fetch(`https://toys-maker-server.vercel.app/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);


   
  

  const result =toys.filter(toy=>toy.category==activeTab)
  console.log(result)

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    
  };

console.log(activeTab);



  return (
    <div className="w-4/6 mx-auto my-28">
      <Tabs>
        <TabList className="bg-blue-600 pt-2 my-3 text-white">
          <Tab onClick={() => handleTabClick("Sports")}>Sports</Tab>
          <Tab onClick={() => handleTabClick("Truck")}>Truck</Tab>
          <Tab onClick={() => handleTabClick("Regular")}>Regular Car</Tab>
          <Tab onClick={() => handleTabClick("Mini")}> Mini Police Car</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-4">
            {toys?.map((toy, index) => (
              <div key={index + 1}>
                <div className="card card-compact w-96 bg-base-100 my-8  shadow-xl">
                  <figure>
                    <img src={toy.photo} alt="toys" className="h-60 p-4" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <Link to={`/toy/${toy._id}`}>
                        {" "}
                        <button className="btn btn-primary">details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyTabs;
