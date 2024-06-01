import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navabar/Navbar";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto bg-ttPrimaryBg">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;