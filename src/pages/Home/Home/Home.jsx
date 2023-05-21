import Banner from "../Banner/Banner";
import ToyTabs from "../ToyTabs/ToyTabs";

const Home = () => {
  return (
    <div >
      <Banner></Banner>
      <hr className="border-2 border-blue-600 w-4/5 mx-auto mt-20" />
      <ToyTabs></ToyTabs>
     
    </div>
  );
};

export default Home;
