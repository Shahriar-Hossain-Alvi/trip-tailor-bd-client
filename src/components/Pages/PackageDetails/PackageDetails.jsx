import { useLoaderData } from "react-router-dom";
import PackageImageGallery from "../../Utility/PackageImageGallery";
import CheckMarkIcon from "../../Utility/CheckMarkIcon";
import { useEffect, useState } from "react";
import DaisyLoadingSpinner from "../../Utility/DaisyLoadingSpinner";



const PackageDetails = () => {
    const [dataLoading, setDataLoading] = useState(true);

    const singlePackageInfo = useLoaderData();

    useEffect(() => {
        if(singlePackageInfo){
            setDataLoading(false);
        }
    }, [singlePackageInfo]);

    if(dataLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    const { _id, spotImages, tourType, tripTitle, price, Description, tourPlan } = singlePackageInfo;


    return (
        <div className="py-10 container mx-auto">
            <h2 className="text-center font-black text-5xl font-playfairDisplay tracking-wider text-ttPrimary underline capitalize mb-8">{tripTitle}</h2>

            {/* gallery */}
            <div>
                <PackageImageGallery spotImages={spotImages}></PackageImageGallery>
            </div>

            {/* details */}
            <div className="my-5">
                <p className="text-lg font-medium text-ttPrimary"><span className="font-bold underline capitalize text-xl">About this trip:</span> {Description}</p>

                <h4 className="mt-3 text-lg font-medium text-ttPrimary capitalize"><span className="font-bold underline capitalize text-xl">Tour type:</span> {tourType}</h4>

                <h4 className="mt-3 text-lg font-medium capitalize text-ttPrimary"><span className="font-bold underline text-xl">Price:</span> {price}/- BDT</h4>
            </div>

            {/* tour plan */}
            <div>
                <h2 className="text-center text-3xl font-bold underline uppercase mb-5">Tour Plan</h2>
                <ul className="timeline timeline-vertical">
                    {
                        tourPlan?.map((day, idx) => <li className="group" key={idx}>
                            <div className="timeline-start border p-3 rounded-xl  bg-ttPrimary text-ttSecondary font-bold group-hover:bg-ttSecondary group-hover:text-ttPrimary transition">Day {idx + 1}</div>
                            <div className="timeline-middle">
                                <CheckMarkIcon></CheckMarkIcon>
                            </div>
                            <div className="timeline-end timeline-box group-hover:border-ttSecondary transition">
                                <h2 className="font-bold text-ttPrimary">{day.title}</h2>
                                <p className="text-ttTerTiary font-medium">{day.description}</p>
                            </div>
                            <hr />
                        </li>)
                    }
                </ul>
            </div>



            {/* todo add tour guides list */}
            {/* todo add booking form guides list */}
            {/* todo validate if the user is logged in before booking */}
            {/* todo add confirmation modal for booking confirm */}
        </div>
    );
};

export default PackageDetails;