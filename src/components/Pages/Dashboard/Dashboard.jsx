import { Link, NavLink, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";



const Dashboard = () => {
    const [role] = useRole();
    console.log(role);


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


                {/* routes for tourist */}
                {
                    role === 'tourist' && <ul id="dashboardMenu" className="menu uppercase pr-14">
                        <li><NavLink to='/dashboard/touristProfile'>My Profile</NavLink></li>
                        <li><NavLink to='myBookings'>My Bookings</NavLink></li>
                        <li><NavLink to='myWishlist'>My Wishlist</NavLink></li>
                        <li><NavLink to='RequestToAdmin'>Request to Admin</NavLink></li>
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




            {/* dashboard content */}
            <div className="flex-1 mt-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;
