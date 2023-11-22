import Banner from "./Banner";
import BristoBoss from "./BristoBoss";
import CallSection from "./CallSection";
import FuturesMenu from "./FuturesMenu";
import Order from "./Order";
import PopularMenu from "./PopularMenu";
import Recommended from "./Recommended";
import Review from "./Review";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Bistro Restaurant</title>
      </Helmet>
      <Banner></Banner>
      <Order></Order>
      <BristoBoss></BristoBoss>
      <PopularMenu></PopularMenu>
      <CallSection></CallSection>
      <Recommended></Recommended>
      <FuturesMenu></FuturesMenu>
      <Review></Review>
    </div>
  );
};

export default Home;
