import { Outlet } from "react-router-dom";
import Navbar from "../pages/shear/Navbar";
import Footer from "../pages/shear/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;