import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div className="bg-ttPrimaryBg py-20">
            <h2 className="font-montserrat text-lg bg-ttSecondary">This is main root</h2>
            <h2 className="font-anton text-2xl text-ttTerTiary bg-ttPrimary">This is main root</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;