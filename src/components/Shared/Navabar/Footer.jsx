import logo from "../../../assets/images/Trip Tailor.png";
import { GrYoutube } from "react-icons/gr";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-ttPrimary text-white">
                <nav>
                    <h6 className="footer-title">Menu</h6>
                    <Link to='/'>
                        <p className="link link-hover">Home</p>
                    </Link>
                    <Link to='/community'>
                        <p className="link link-hover">Community</p>
                    </Link>
                    <Link to='/allStories'>
                        <p className="link link-hover">Travel Stories</p>
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to='/about'>
                        <p className="link link-hover">About us</p>
                    </Link>
                    <Link to='/contact'>
                        <p className="link link-hover">Contact</p>
                    </Link>
                    <Link to='/allPackages'>
                        <p className="link link-hover">Packages</p>
                    </Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>


            <footer className="footer px-10 py-2 border-t bg-ttPrimary border-ttTerTiary">
                <aside className="items-center grid-flow-col">
                    <img className="w-20 h-20 rounded-full" src={logo} alt="logo" />
                    <p className="text-ttTerTiary font-medium"><span className="font-playfairDisplay font-bold text-white text-lg">Trip Tailor Bangladesh</span> <br />Providing reliable tour guides and packages since 2024</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="#" className="hover:bg-ttSecondary transition duration-150 ease-linear text-white rounded-full bg-[#8080804d] p-4">
                            <FaFacebookF className="w-4 h-4" />
                        </a>

                        <a href="#" className="hover:bg-ttSecondary transition duration-150 ease-linear text-white rounded-full bg-[#8080804d] p-4">
                            <GrYoutube className="w-4 h-4" />
                        </a>
                        <a href="#" className="hover:bg-ttSecondary transition duration-150 ease-linear text-white rounded-full bg-[#8080804d] p-4">
                            <FaXTwitter className="w-4 h-4" />
                        </a>

                        <a href="#" className="hover:bg-ttSecondary transition duration-150 ease-linear text-white rounded-full bg-[#8080804d] p-4">
                            <FaInstagram className="w-4 h-4" />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;