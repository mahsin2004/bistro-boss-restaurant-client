import Tittle from "../../component/title/Tittle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";

const Order = () => {
  return (
    <div className="my-28 max-w-7xl mx-auto">
      <div className="w-[424px] mx-auto">
        <Tittle
          header="ORDER ONLINE"
          subHeader="---From 11:00am to 10:00pm---"
        ></Tittle>
      </div>
      <div className="mt-12 mb-20">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <p className="text-3xl text-center -mt-20 text-white uppercase absolute bottom-8">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <p className="text-3xl text-center text-white uppercase absolute bottom-8">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <p className="text-3xl text-center text-white uppercase absolute bottom-8">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <p className="text-3xl text-center text-white uppercase absolute bottom-8">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <p className="text-3xl text-white uppercase absolute bottom-8">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Order;
