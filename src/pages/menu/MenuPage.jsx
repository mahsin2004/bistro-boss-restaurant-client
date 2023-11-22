import Cover from "../../component/cover/Cover";
import banner from "../../assets/menu/banner3.jpg";
import section1 from "../../assets/menu/dessert-bg.jpeg";
import section2 from "../../assets/menu/pizza-bg.jpg";
import section3 from "../../assets/menu/salad-bg.jpg";
import section4 from "../../assets/menu/soup-bg.jpg";
import Tittle from "../../component/title/Tittle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../hook/useMenu";
import MenuItem from "../../component/menuItem/MenuItem";
import Container from "../../component/container/Container";
import Button from "../../component/button/Button";

const MenuPage = () => {
  const [menu] = useMenu();
  const offer = menu.filter((item) => item.category === "offered");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Restaurant</title>
      </Helmet>
      <Cover
        bgImage={banner}
        title="OUR MENU"
        description="Would you like to try a dish?"
      ></Cover>
      {/* Section 1 */}
      <div className="py-16">
        <Tittle header="TODAY'S OFFER" subHeader="---Don't miss---"></Tittle>
        <Container>
          <div className="grid grid-cols-2 gap-8">
            {offer.map((item) => (
              <MenuItem
                key={item._id}
                img={item.image}
                title={item.name}
                price={item.price}
                description={item.recipe}
              ></MenuItem>
            ))}
          </div>
        </Container>
        <div className="flex justify-center">
          <Button
            textColor="gray-600"
            borderColor="gray-700"
            btnName="ORDER YOUR FAVOURITE FOOD"
            hoverText="[#BB8506]"
            hoverBorderColor="[#BB8506]"
          ></Button>
        </div>
      </div>

      {/* section 2 */}
      <div className="py-16">
        <Cover
          title="DESSERTS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          bgImage={section1}
        ></Cover>
        <Container>
          <div className="grid grid-cols-2 gap-8">
            {desserts.map((item) => (
              <MenuItem
                key={item._id}
                img={item.image}
                title={item.name}
                price={item.price}
                description={item.recipe}
              ></MenuItem>
            ))}
          </div>
        </Container>
        <div className="flex justify-center">
          <Button
            textColor="gray-600"
            borderColor="gray-700"
            btnName="ORDER YOUR FAVOURITE FOOD"
            hoverText="[#BB8506]"
            hoverBorderColor="[#BB8506]"
          ></Button>
        </div>
      </div>

      {/* section 3 */}
      <div className="py-16">
        <Cover
          title="PIZZA"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          bgImage={section2}
        ></Cover>
        <Container>
          <div className="grid grid-cols-2 gap-8">
            {pizza.map((item) => (
              <MenuItem
                key={item._id}
                img={item.image}
                title={item.name}
                price={item.price}
                description={item.recipe}
              ></MenuItem>
            ))}
          </div>
        </Container>
        <div className="flex justify-center">
          <Button
            textColor="gray-600"
            borderColor="gray-700"
            btnName="ORDER YOUR FAVOURITE FOOD"
            hoverText="[#BB8506]"
            hoverBorderColor="[#BB8506]"
          ></Button>
        </div>
      </div>

      {/* section 4 */}
      <div className="py-16">
        <Cover
          title="SALADS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          bgImage={section3}
        ></Cover>
        <Container>
          <div className="grid grid-cols-2 gap-8">
            {salads.map((item) => (
              <MenuItem
                key={item._id}
                img={item.image}
                title={item.name}
                price={item.price}
                description={item.recipe}
              ></MenuItem>
            ))}
          </div>
        </Container>
        <div className="flex justify-center">
          <Button
            textColor="gray-600"
            borderColor="gray-700"
            btnName="ORDER YOUR FAVOURITE FOOD"
            hoverText="[#BB8506]"
            hoverBorderColor="[#BB8506]"
          ></Button>
        </div>
      </div>

      {/* section 5 */}
      <div className="py-16">
        <Cover
          title="SOUPS"
          description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          bgImage={section4}
        ></Cover>
        <Container>
          <div className="grid grid-cols-2 gap-8">
            {soups.map((item) => (
              <MenuItem
                key={item._id}
                img={item.image}
                title={item.name}
                price={item.price}
                description={item.recipe}
              ></MenuItem>
            ))}
          </div>
        </Container>
        <div className="flex justify-center">
          <Button
            textColor="gray-600"
            borderColor="gray-700"
            btnName="ORDER YOUR FAVOURITE FOOD"
            hoverText="[#BB8506]"
            hoverBorderColor="[#BB8506]"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
