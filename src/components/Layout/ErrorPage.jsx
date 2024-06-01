/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import errorAnimation from "../../assets/Animations/ErrorAnimation.json";
import Lottie from 'react-lottie';

const ErrorPage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: errorAnimation,
    };

    return (
        <div className="text-center">
            <Lottie options={defaultOptions}
                height={400}
                width={400}>
            </Lottie>

            <h1 className=" font-black text-3xl text-ttSecondary">404 ERROR 😨</h1>
            <h2 className="text-lg mb-3 mt-1">Oh NO! 😢 Looks like you've lost</h2>
            <Link to='/'>
                <button className="btn bg-ttSecondary text-white hover:bg-ttPrimary">Go to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;