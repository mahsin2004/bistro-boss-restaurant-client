import Tittle from "../../component/title/Tittle";
import features from "../../assets/home/featured.jpg";
import Button from "../../component/button/Button";

const FuturesMenu = () => {
  return (
    <div className="max-w-7xl text-white mx-auto my-16 Features-bg py-28 px-10 bg-opacity-60 bg-fixed">
      <div className="w-[442px] mx-auto">
        <Tittle subHeader="---Check it out---" header="FROM OUR MENU"></Tittle>
      </div>
      <div className="flex gap-16 mt-12 items-center">
        <div className="w-full">
          <img className="w-[548px] h-[300px]" src={features} alt="" />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">
            March 20, 2023 WHERE CAN I GET SOME?
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error{" "}
            <br /> voluptate facere, deserunt dolores maiores quod nobis quas
            quasi. Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="  mt-4">
            <Button textColor="white" borderColor="[#BB850]" btnName='Buy Now' hoverText="[#BB8506]" hoverBorderColor="[#BB8506]"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturesMenu;
