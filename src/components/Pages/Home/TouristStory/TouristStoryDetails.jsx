import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Utility/LoadingSpinner";
import { FaStar } from "react-icons/fa6";

const TouristStoryDetails = () => {
    const story = useLoaderData();
    const { loading } = useAuth();

    const { storyTitle, imageURL, name, storyDetails, tourType, spotImage, rating } = story;


    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="container mx-auto">
            {/* writer details */}
            <div className="flex flex-col gap-2 items-center justify-center my-5">
                <img className="w-16 h-16 rounded-full" src={imageURL} alt="writer image" />
                <div>
                    <h2>{name}</h2>
                </div>
            </div>


            {/* story details */}
            <div className="grid grid-cols-3 gap-5 mb-10">
                <div className="col-span-2">
                    <h2 className="text-center text-4xl font-bold text-ttPrimary underline font-playfairDisplay tracking-wider mb-6">Title: {storyTitle}</h2>

                    <p className="text-lg font-medium mb-3">{storyDetails}</p>


                    <div>
                        <h4 className="text-lg font-bold capitalize">Tour Type: <span className="font-medium">{tourType}</span></h4>

                        <p className="flex gap-1 text-lg font-bold items-center">Rating:  <span className="font-medium">{rating}</span> <FaStar className="text-ttSecondary"></FaStar></p>
                    </div>
                </div>

                {/* spot image */}
                <div>
                    <img className="w-full h-full" src={spotImage} alt="spot image" />
                </div>
            </div>
        </div>
    );
};

export default TouristStoryDetails;