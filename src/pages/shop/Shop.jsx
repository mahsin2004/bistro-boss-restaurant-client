import Cover from "../../component/cover/Cover";
import banner from "../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hook/useMenu";
import Container from "../../component/container/Container"
import Card from "../../component/card/Card";

const Shop = () => {
  const [menu] = useMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Shop | Restaurant</title>
      </Helmet>
      <Cover
        bgImage={banner}
        title="OUR SHOP"
        description="Would you like to try a dish?"
      ></Cover>
      <div className="max-w-7xl mx-auto py-16">
        <Tabs>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <Container>
              <div className="grid grid-cols-3 gap-8">
                {salads.map((item) => (
                  <Card
                  key={item._id}
                  item={item}
                  ></Card>
                ))}
              </div>
            </Container>
          </TabPanel>
          <TabPanel>
          <Container>
              <div className="grid grid-cols-3 gap-8">
                {pizza.map((item) => (
                  <Card
                    key={item._id}
                    item={item}
                  ></Card>
                ))}
              </div>
            </Container>
          </TabPanel>
          <TabPanel>
          <Container>
              <div className="grid grid-cols-3 gap-8">
                {soups.map((item) => (
                  <Card
                  key={item._id}
                  item={item}
                  ></Card>
                ))}
              </div>
            </Container>
          </TabPanel>
          <TabPanel>
          <Container>
              <div className="grid grid-cols-3 gap-8">
                {desserts.map((item) => (
                  <Card
                  key={item._id}
                  item={item}
                  ></Card>
                ))}
              </div>
            </Container>
          </TabPanel>
          <TabPanel>
          <Container>
              <div className="grid grid-cols-3 gap-8">
                {drinks.map((item) => (
                  <Card
                  key={item._id}
                  item={item}
                  ></Card>
                ))}
              </div>
            </Container>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
