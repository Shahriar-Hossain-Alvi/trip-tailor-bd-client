import { useLoaderData } from "react-router-dom";
import TourTypesByCategoryCard from "./TourTypesByCategoryCard";
import useAuth from "../../Hooks/useAuth";
import DaisyLoadingSpinner from "../../Utility/DaisyLoadingSpinner";

const TourTypesByCategory = () => {

    const categoryInfo = useLoaderData();

    const {loading} = useAuth();
    if(loading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div className="py-10">
            <h2 className="text-center font-bold text-3xl text-ttPrimary mb-10">See all the data by your selected category</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    categoryInfo.map(singleCategoryInfo => <TourTypesByCategoryCard key={singleCategoryInfo._id} singleCategoryInfo={singleCategoryInfo}></TourTypesByCategoryCard>)
                }
            </div>
        </div>
    );
};

export default TourTypesByCategory;