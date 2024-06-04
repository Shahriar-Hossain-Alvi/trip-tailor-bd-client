import { useLoaderData } from "react-router-dom";
import PackageImageGallery from "../../Utility/PackageImageGallery";


const PackageDetails = () => {
    const singlePackageInfo = useLoaderData();
    const { _id, spotImages, tourType, tripTitle, price, Description, tourPlan } = singlePackageInfo;


    return (
        <div className="py-10">
            <h2 className="text-center font-bold text-4xl font-playfairDisplay tracking-wider text-ttPrimary underline capitalize mb-5">{tripTitle}</h2>

            {/* gallery */}
            <div>
                <PackageImageGallery spotImages={spotImages}></PackageImageGallery>
            </div>
        </div>
    );
};

export default PackageDetails;