import { ImFacebook2 } from "react-icons/im";
import logo from "../../../assets/images/Trip Tailor.png";
import { GrYoutube } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-ttPrimary text-white">
                <nav>
                    <h6 className="footer-title">Menu</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Travel Stories</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Guides</a>
                    <a className="link link-hover">Packages</a>
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
                        <a href="#" className="hover:text-ttSecondary transition duration-150 ease-linear text-white">
                            <ImFacebook2 className="w-8 h-8" />
                        </a>

                        <a href="#" className="hover:text-ttSecondary transition duration-150 ease-linear text-white">
                            <GrYoutube className="w-8 h-8" />
                        </a>
                        <a href="#" className="hover:text-ttSecondary transition duration-150 ease-linear text-white">
                            <FaSquareXTwitter className="w-8 h-8" />
                        </a>
                    </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;