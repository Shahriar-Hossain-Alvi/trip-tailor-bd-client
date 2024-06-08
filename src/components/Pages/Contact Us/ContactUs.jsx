import { FaMobileAlt } from "react-icons/fa";
import contactBg from "../../../assets/images/signupBanner.jpg";
import SectionTitle from "../../Utility/SectionTitle";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${contactBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-24">
                        <h2 className="text-7xl font-bold  tracking-wider font-playfairDisplay">Contact US</h2>
                    </div>
                </div>
            </div>

            <div className="mx-1 md:mx-2">
                <div className="mb-5">
                    <SectionTitle
                        heading={'Want to reach us?'}
                        subHeading={'Feel free to reach out to us with any questions or to book your next adventure!'}
                    ></SectionTitle>

                    <div className="max-w-md mx-auto space-y-2">
                        <h3 className="font-medium text-lg text-ttTerTiary"><FaMobileAlt className="inline text-ttSecondary" /><span className="font-bold text-ttPrimary">Phone:</span> +880 1234 567 890</h3>

                        <h3 className="font-medium text-lg text-ttTerTiary">
                            <MdEmail className="inline text-ttSecondary" /><span className="font-bold text-ttPrimary">Email:</span> info@triptailorbd.com</h3>

                        <h3 className="font-medium text-lg text-ttTerTiary">
                            <FaLocationDot className="inline text-ttSecondary" /><span className="font-bold text-ttPrimary">Address:</span> 123 Adventure Road, Travel City, BD</h3>
                    </div>
                </div>

                <div className="mb-7 max-w-md mx-auto text-lg font-medium">
                    <h4 className="">Our business hours are as follows:</h4>

                    <p><span className="font-bold">Sunday to Thursday</span>: 9:00 AM - 6:00 PM</p>

                    <p><span className="font-bold">Saturday</span>: 10:00 AM - 4:00 PM</p>
                    
                    <p><span className="font-bold">Sunday</span>: Closed</p>

                </div>

                <div className="mb-10">
                    <h2 className="text-center font-bold text-3xl mb-3 tracking-wider font-playfairDisplay">Our Location</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239248552!2d90.27923928771326!3d23.78088745614386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86f7fb8c815%3A0x9791081c6e1c3128!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1641363471780!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;