import { FaHeart } from "react-icons/fa";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const OurPackagesCard = ({ singlePackage }) => {
    const { _id, spotImages, tourType, tripTitle, price } = singlePackage;

    const firstImage = spotImages[0];
    console.log(firstImage);

    return (
        <div className="p-5 border border-ttTerTiary rounded border-opacity-20 group h-[400px] flex flex-col">
            <div className="relative overflow-hidden">
                <img className="group-hover:scale-110 transition w-full h-full" src={firstImage} alt="" />

                <div className="flex justify-between bg-black bg-opacity-60 bottom-0 absolute w-full p-2">
                    <p className="text-white">{price} <span className="italic text-ttSecondary font-bold">tk</span> </p>
                    <FaHeart className="text-ttSecondary text-2xl" />
                </div>
            </div>


            <div className="mt-5 flex-1">
                <h2 className="text-xl font-bold capitalize mb-1">{tripTitle}</h2>
                <h4 className="text-ttTerTiary font-semibold mb-2  capitalize">Trip Type: {tourType}</h4>
            </div>
            <Link to={`/packageDetails/${_id}`}>
                <button className="btn btn-block bg-ttSecondary text-white hover:bg-ttPrimary">View Package</button>
            </Link>
        </div>
    );
};

OurPackagesCard.propTypes = {
    singlePackage: PropTypes.object
}

export default OurPackagesCard;