import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import DaisyLoadingSpinner from '../../Utility/DaisyLoadingSpinner';
import { useQuery } from '@tanstack/react-query';

const PackageDetailsGuideLists = () => {
    const axiosPublic = useAxiosPublic();
    const { data: packageDetailsTourGuides = [], isLoading } = useQuery({
        queryKey: ['packageDetailsTourGuides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides');
            return res.data;
        }
    })



    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div>
            {
                packageDetailsTourGuides.map(singlePackageDetailsTourGuide => <Link key={singlePackageDetailsTourGuide._id}
                    to={`/tourGuideDetails/${singlePackageDetailsTourGuide._id}`}
                >
                    <div className='flex items-center gap-4 my-2 border p-2 rounded-xl border-ttSecondary hover:text-white hover:bg-ttPrimary'>
                        <img className='w-12 h-12 rounded-full' src={singlePackageDetailsTourGuide.imgURL} alt="" />
                        <h2>Name: {singlePackageDetailsTourGuide.name}</h2>
                        <p>Experience: {singlePackageDetailsTourGuide.experience} years</p>
                    </div>
                </Link>)
            }
        </div>

    );
};

export default PackageDetailsGuideLists;