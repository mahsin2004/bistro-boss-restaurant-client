import img1 from "../../assets/home/slide1.jpg";
import Tittle from "../../component/title/Tittle";

const Recommended = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="w-[442px] mx-auto mb-12">
        <Tittle header="---Should Try---" subHeader="CHEF RECOMMENDS"></Tittle>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <div className="card  bg-base-100 border-2 drop-shadow-sm">
          <figure>
            <img className="w-[424px] h-[300px]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center text-[#BB8506] mt-4">
              <button className="px-[30px] py-[10px] rounded-lg hover:bg-gray-800 border-[#BB8506] hover:border-none border-b-4 bg-[#E8E8E8]">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 border-2 drop-shadow-sm">
          <figure>
            <img className="w-[424px] h-[300px]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center text-[#BB8506] mt-4">
              <button className="px-[30px] py-[10px] rounded-lg hover:bg-gray-800 border-[#BB8506] hover:border-none border-b-4 bg-[#E8E8E8]">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 border-2 drop-shadow-sm">
          <figure>
            <img className="w-[424px] h-[300px]" src={img1} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl font-semibold">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center text-[#BB8506] mt-4">
              <button className="px-[30px] py-[10px] rounded-lg hover:bg-gray-800 border-[#BB8506] hover:border-none border-b-4 bg-[#E8E8E8]">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
