import { Link, NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    return (
        <div className="flex gap-6">
            {/* dashboard sidebar */}
            <div className="w-72 pl-6 pt-12 min-h-screen bg-ttPrimary text-white">
                <Link to='/' className="flex flex-col text-center mb-5">
                    <p className="text-3xl 
                    font-semibold">
                        <span className="text-ttSecondary">T</span>rip <span className="text-ttSecondary font-medium">T</span>ailor
                    </p>
                    <p className="text-xs  text-ttSecondary">BANGLADESH</p>
                </Link>

                <ul id="dashboardMenu" className="menu uppercase pr-14">
                    <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
                    <li><NavLink to='myBookings'>My Bookings</NavLink></li>
                    <li><NavLink to='myWishlist'>My Wishlist</NavLink></li>
                    <li><NavLink to='RequestToAdmin'>Request to Admin</NavLink></li>
                </ul>
            </div>




            {/* dashboard content */}
            <div className="flex-1 mt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
