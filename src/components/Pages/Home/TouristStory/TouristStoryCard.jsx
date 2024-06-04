import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const TouristStoryCard = ({ story }) => {
    const { _id, storyTitle, storyDetails, rating, imageURL, name, tourType } = story;


    return (
        <Link to={`/storyDetails/${_id}`} className="px-9 bg-ttPrimaryBg">
            <div className="mb-4">
                <FaQuoteLeft className="text-2xl text-ttSecondary" />
                <h2 className="font-bold text-center text-xl text-ttPrimary font-playfairDisplay tracking-wide">{storyTitle}</h2>
                <h3 className="text-ttTerTiary text-center my-1">Tour type: {tourType}</h3>
                <p className="flex items-center justify-center text-sm mb-1 text-ttSecondary">Ratings: {rating} <FaStar /></p>
                <p className="text-center text-ttPrimary">{storyDetails.slice(0, 200)}...</p>


                <div className="my-5">
                    <h2 className="text-center font-bold text-ttPrimary">Writer</h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-7 h-7">
                            <img className="w-7 h-7 rounded-full" src={imageURL} alt="" />
                        </div>
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>

            <div className="flex justify-end">
                <FaQuoteRight className="text-2xl text-ttSecondary" />
            </div>
        </Link>
    );
};


TouristStoryCard.propTypes = {
    story: PropTypes.object
}

export default TouristStoryCard; 