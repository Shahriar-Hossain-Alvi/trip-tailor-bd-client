import { TiThMenu } from "react-icons/ti";

const DashboardDrawer = () => {
    return (
        <div className="drawer lg:drawer-open bg-ttPrimary">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start justify-start">

                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn bg-ttPrimary border-0  hover:bg-ttSecondary text-white drawer-button lg:hidden">
                    <TiThMenu className="text-xl" />
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardDrawer;