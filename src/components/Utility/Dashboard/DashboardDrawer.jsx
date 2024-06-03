import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";

const DashboardDrawer = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start justify-start">

                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn border-0 bg-ttPrimary hover:bg-ttSecondary text-white drawer-button lg:hidden">
                    <TiThMenu className="text-xl" />
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full text-white bg-ttPrimary">
                    {/* Sidebar content here */}
                    <div className="flex flex-col text-center">
                        <a className="text-3xl font-semibold"><span className="text-ttSecondary">T</span>rip <span className="text-ttSecondary font-medium">T</span>ailor</a>
                        <a className="text-xs  text-ttSecondary">BANGLADESH</a>
                    </div>
                    <li><Link to='myProfile'>My Profile</Link></li>
                    <li><Link to='myBookings'>My Bookings</Link></li>
                    <li><Link to='myWishlist'>My Wishlist</Link></li>
                    <li><Link to='RequestToAdmin'>Request to Admin</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardDrawer;