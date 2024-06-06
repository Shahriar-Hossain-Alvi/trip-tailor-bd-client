import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../Shared/Navabar/Navbar";
import Footer from "../Shared/Navabar/Footer";


const Main = () => {
    return (
        <div>
            <ScrollRestoration></ScrollRestoration>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;