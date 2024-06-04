import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import DaisyLoadingSpinner from "../../../../Utility/DaisyLoadingSpinner";
import OurPackagesCard from "./OurPackagesCard";


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
        </div>
    );
};

export default OurPackagesSection;