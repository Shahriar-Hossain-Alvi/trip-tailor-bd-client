import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import { IoLogOutOutline } from "react-icons/io5";



const Dashboard = () => {
    const { logoutUser } = useAuth();
    const [role] = useRole();

    const handleLogout = () => {
        logoutUser();
    }


    return (
        <div className="flex flex-row-reverse gap-6">
            {/* dashboard sidebar */}
            <div className="w-72 pt-12 items-center min-h-screen bg-ttPrimary text-white flex flex-col">
                <Link to='/' className="flex flex-col text-center mb-5 group">
                    <p className="text-3xl 
                    font-semibold">
                        <span className="text-ttSecondary group-hover:font-black">T</span>rip <span className="text-ttSecondary font-medium group-hover:font-black ">T</span>ailor
                    </p>
                    <p className="text-xs  text-ttSecondary">BANGLADESH</p>
                </Link>

                <div className="flex-1">
                    {/* routes for tourist */}
                    {
                        role === 'tourist' && <ul id="dashboardMenu" className="menu uppercase pr-14">
                            <li><NavLink to='/dashboard/touristProfile'>My Profile</NavLink></li>
                            <li><NavLink to='myBookings'>My Bookings</NavLink></li>
                            <li><NavLink to='myWishlist'>My Wishlist</NavLink></li>
                            <li><NavLink to='requestToAdmin'>Request to Admin</NavLink></li>
                        </ul>
                    }


                    {/* routes for tour guide */}
                    {
                        role === "tourGuide" && <ul id="dashboardMenu" className="menu uppercase pr-14">
                            <li><NavLink to='/dashboard/tourGuideProfile'>My Profile</NavLink></li>
                            <li><NavLink to='assignedTours'>My Assigned Tours</NavLink></li>
                        </ul>
                    }


                    {/* routes for admin */}
                    {
                        role === 'admin' && <ul id="dashboardMenu" className="menu uppercase pr-14">
                            <li><NavLink to='/dashboard/adminProfile'>My Profile</NavLink></li>
                            <li><NavLink to='addPackage'>Add Package</NavLink></li>
                            <li><NavLink to='manageUsers'>Manage  Users</NavLink></li>
                        </ul>
                    }
                </div>


                <div className="mb-10">
                    <button onClick={handleLogout} className="btn btn-wide bg-transparent text-white border-ttSecondary text-lg hover:bg-ttSecondary hover:text-ttPrimary hover:border-ttSecondary">Logout <IoLogOutOutline className="text-lg" /></button>
                </div>
            </div>



            {/* dashboard content */}
            <div className="flex-1 mt-10 bg-ttPrimaryBg">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
