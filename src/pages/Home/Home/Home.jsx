import AboutUs from "../AboutUs/AboutUs";
import Aos from "../Aos/Aos";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import ToyTabs from "../ToyTabs/ToyTabs";

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <hr className="border-2 border-blue-600 w-4/5 mx-auto mt-20" /> 
      <Gallary></Gallary>
      <ToyTabs></ToyTabs>
      <Aos></Aos>
      <AboutUs></AboutUs>
     
    </div>
  );
};

export default Home;
