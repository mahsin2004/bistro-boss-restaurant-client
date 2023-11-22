import Container from "../../component/container/Container";
import MenuItem from "../../component/menuItem/MenuItem";
import Tittle from "../../component/title/Tittle";
import useMenu from "../../hook/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <Container>
      <div>
        <div className="w-[442px] mx-auto">
          <Tittle
            subHeader="---Check it out---"
            header="FROM OUR MENU"
          ></Tittle>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-10">
          {popular.map((item) => (
            <MenuItem
              key={item._id}
              img={item.image}
              title={item.name}
              price={item.price}
              description={item.recipe}
            ></MenuItem>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularMenu;
