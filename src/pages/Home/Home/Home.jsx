import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Brands from "../Brands/Brands";
import Discount from "../Discount/Discount";
import Gallary from "../Gallary/Gallary";
import Inteduce from "../Inteduce/Inteduce";
import Review from "../Review/review";
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
      <ToyTabs></ToyTabs>
      <Gallary></Gallary>
      <Brands></Brands>
     <Review></Review>
     <Blog></Blog>
      <AboutUs></AboutUs>
     
    </div>
  );
};

export default Home;
