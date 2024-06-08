import { FaHandFist, FaHandPointRight, FaHandshake } from 'react-icons/fa6';
import SectionTitle from '../../Utility/SectionTitle';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import aboutBg from "../../../assets/images/signupBanner.jpg";

const AboutUs = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url(${aboutBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-24">
                        <h2 className="text-7xl font-bold  tracking-wider font-playfairDisplay">About US</h2>
                    </div>
                </div>
            </div>

            <div className='mx-1 md:mx-2'>
                <SectionTitle
                    heading={'Welcome to Trip Tailor Bangladesh'}
                    subHeading={''}
                ></SectionTitle>

                <p className='text-ttPrimary font-medium mb-5'><span className='underline font-bold text-lg'><FaHandFist className='inline text-ttSecondary' />Our Mission:</span> We are dedicated to offering unique and immersive travel experiences that showcase the beauty and culture of our destinations. Our mission is to provide personalized and unforgettable tours that connect travelers with the heart and soul of Bangladesh</p>

                <p className='text-ttPrimary font-medium mb-5'><MdOutlineHistoryEdu className='inline text-xl text-ttSecondary' /><span className='underline font-bold text-lg'>Our Stroy:</span> <span >Trip Tailor Bangladesh</span> was founded by a group of passionate travelers who wanted to share their love for Bangladesh with the world. Since our inception in 2024, we have been committed to creating memorable travel experiences that go beyond the ordinary.
                </p>


                <p className='text-ttPrimary font-medium mb-5'><FaHandPointRight className='inline text-lg text-ttSecondary' /><span className='underline font-bold text-lg'>Our Values:</span> We believe in responsible tourism, cultural respect, and providing exceptional customer service. Our tours are designed to leave a positive impact on the communities we visit while ensuring our travelers have an enriching experience.
                </p>

                <p className='text-ttPrimary font-medium mb-5'> <FaHandshake className='inline text-lg text-ttSecondary' /><span className='underline font-bold text-lg'>What We Offer</span> From cultural immersions to adventure expeditions, we offer a diverse range of tours tailored to suit every type of traveler. Whether you are looking for a relaxing getaway or an action-packed adventure, we have something for everyone.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;