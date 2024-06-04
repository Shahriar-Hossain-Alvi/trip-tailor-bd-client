import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import DaisyLoadingSpinner from "../../../../Utility/DaisyLoadingSpinner";
import OurPackagesCard from "./OurPackagesCard";
import { Link } from "react-router-dom";


const OurPackagesSection = () => {
    const axiosPublic = useAxiosPublic();
    const { data: highestPricePackages = [], isLoading } = useQuery({
        queryKey: ['highestPricePackages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/highestPricePackages');
            return res.data;
        }
    })

    // console.log(highestPricePackages);

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div>
            <h2 className="text-center text-ttPrimary font-semibold tracking-wider text-3xl mb-5">Our <span className="text-ttSecondary capitalize">premium</span> Packages</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    highestPricePackages.map(singlePackage => <OurPackagesCard key={singlePackage._id} singlePackage={singlePackage}></OurPackagesCard>)
                }
            </div>

            <div className="text-center mt-5">
                <Link to='/allPackages'>
                <button className="btn bg-ttPrimary text-white hover:bg-ttSecondary">View All Packages</button>
                </Link>
            </div>
        </div>
    );
};

export default OurPackagesSection;