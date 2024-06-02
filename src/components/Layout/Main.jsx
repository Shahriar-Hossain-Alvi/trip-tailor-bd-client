import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navabar/Navbar";
import Footer from "../Shared/Navabar/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto bg-ttPrimaryBg">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;