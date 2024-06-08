import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DaisyLoadingSpinner from "../../Utility/DaisyLoadingSpinner";
import OurPackagesCard from "../Home/TourismAndTravelGuide/OurPackagesSection/OurPackagesCard";
const AllPackages = () => {
    const axiosPublic = useAxiosPublic();

    const { data: AllPackages = [], isLoading } = useQuery({
        queryKey: ['AllPackages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packages');
            return res.data;
        }
    })


    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div className="py-10 container mx-auto">
            <h2 className="text-center text-ttPrimary font-semibold tracking-wider text-3xl mb-5">All Packages</h2>
            <p className="text-center font-medium text-lg">Explore all the packages we offer</p>
            <div className="grid grid-cols-3 gap-3">
                {
                    AllPackages.map(singlePackage => <OurPackagesCard key={singlePackage._id} singlePackage={singlePackage}></OurPackagesCard>)
                }
            </div>
        </div>
    );
};

export default AllPackages;