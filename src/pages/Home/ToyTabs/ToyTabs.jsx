import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ToyTabs = () => {
  return (
    <div className="w-3/5 mx-auto my-28">
      <Tabs>

        <TabList className="bg-blue-600 pt-2 my-3 text-white">
          <Tab>Sports</Tab>
          <Tab>Truck</Tab>
          <Tab> Regular Car</Tab>
          <Tab> Mini Police Car</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToyTabs;
