import Tittle from "../../component/title/Tittle";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from 'react-icons/bi';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div className="max-w-7xl mx-auto text-center py-16">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <div className="w-2/3 mx-auto">
              <div>
                <Tittle
                  header="TESTIMONIALS"
                  subHeader="---What Our Clients Say---"
                ></Tittle>
              </div>
              <div className="mt-12 ">
                <div className="flex justify-center pb-6"><Rating style={{ maxWidth: 180 }} value={review.rating} readOnly /></div>
                <div className="flex justify-center text-4xl pb-6"> <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft> <BiSolidQuoteSingleRight></BiSolidQuoteSingleRight></div>
                <p>{review.details}</p>
                <h4 className=" text-yellow-600 text-3xl">{review.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
