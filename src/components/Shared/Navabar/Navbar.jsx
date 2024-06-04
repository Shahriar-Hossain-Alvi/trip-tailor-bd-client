import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/Trip Tailor.png";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";

const Navbar = () => {
    const { user, logoutUser, loading } = useAuth();
    const [role] = useRole();

    const handleLogout = () => {
        logoutUser();
    }

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/community'>Community</NavLink></li>
        <li><NavLink to='/blogs'>Blogs</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
        <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>

    return (
        <div>
            <div id="navbar" className="navbar bg-ttPrimary text-white relative z-50">
                {/* navbar start */}
                <div className="navbar-start">
                    {/* menu icon for small screen */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-ttPrimary rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>


                    {/* profile and login/register button */}
                    {
                        loading ?

                            <span className="loading loading-spinner text-ttSecondary loading-sm"></span>

                            :
                            user ? <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-ttPrimary rounded-box min-w-52  space-y-1">
                                    <li className="pl-3 mb-1">Name: {user?.displayName}</li>
                                    <li className="pl-3 mb-1">Email: {user?.email}</li>
                                    {
                                        role === 'tourist' && <li><Link to='/dashboard/touristProfile'>Dashboard</Link></li>
                                    }
                                    {
                                        role === 'tourGuide' && <li><Link to='/dashboard/tourGuideProfile'>Dashboard</Link></li>
                                    }
                                    {
                                        role === 'admin' && <li><Link to='/dashboard/adminProfile'>Dashboard</Link></li>
                                    }


                                    <li><Link to='/offer'>Offer</Link></li>
                                    <button onClick={handleLogout} className="btn btn-sm bg-ttSecondary text-white border-ttSecondary hover:bg-ttPrimary hover:text-ttSecondary hover:border-ttSecondary">Logout</button>
                                </ul>
                            </div>
                                :
                                <div className="flex gap-2">
                                    <Link to='/login'>
                                        <button className="btn bg-ttSecondary text-white border-ttSecondary hover:bg-ttPrimary hover:border-ttSecondary hover:text-ttSecondary">Login</button>
                                    </Link>
                                    <Link to='/signup'>
                                        <button className="btn bg-ttSecondary text-white border-ttSecondary hover:bg-ttPrimary hover:border-ttSecondary hover:text-ttSecondary">Sign Up</button>
                                    </Link>
                                </div>
                    }
                </div>

                {/* navbar center */}
                <div className="navbar-center hidden lg:flex">
                    <ul id="navUl" className="flex justify-between gap-5 px-1 ">
                        {navlinks}
                    </ul>
                </div>

                {/* navbar end */}

                <div className="navbar-end flex-row-reverse justify-start gap-1">
                    <div className="w-12 h-12 rounded-full">
                        <img className="rounded-full" src={logo} alt="" />
                    </div>
                    <div className="flex flex-col text-center">
                        <a className="text-2xl font-semibold"><span className="text-ttSecondary">T</span>rip <span className="text-ttSecondary">T</span>ailor</a>
                        <a className="text-xs  text-ttSecondary">BANGLADESH</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;