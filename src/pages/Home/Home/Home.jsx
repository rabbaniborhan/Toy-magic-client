import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Aos from "../Aos/Aos";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Gallary from "../Gallary/Gallary";
import Inteduce from "../Inteduce/Inteduce";
import ShopByAge from "../ShopByAge/ShopByAge";
import ToyTabs from "../ToyTabs/ToyTabs";
import WeProvide from "../WeProvide/WeProvide";

const Home = () => {

  useTitle("Home")
  return (
    <div >
      <Banner></Banner>
      <WeProvide></WeProvide>
      <ShopByAge></ShopByAge>
      <Inteduce></Inteduce>
      <Discount></Discount>
      <Gallary></Gallary>
      <ToyTabs></ToyTabs>
      <Aos></Aos>
      <AboutUs></AboutUs>
     
    </div>
  );
};

export default Home;
