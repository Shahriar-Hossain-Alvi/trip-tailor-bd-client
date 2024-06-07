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
        <div className='mx-1 md:mx-2 grid gap-1 md:gap-0 grid-cols-2 md:grid-cols-1'>
            {
                packageDetailsTourGuides.map(singlePackageDetailsTourGuide => <Link key={singlePackageDetailsTourGuide._id}
                    to={`/tourGuideDetails/${singlePackageDetailsTourGuide._id}`}
                >
                    <div className='md:flex md:items-center md:gap-4 my-2 border p-2 rounded-xl border-ttSecondary hover:text-white hover:bg-ttPrimary'>
                        <img className='w-12 h-12 rounded-full mx-auto md:mx-0 my-2 md:my-0' src={singlePackageDetailsTourGuide.imgURL} alt="" />
                        <h2><span className='font-bold'>Name:</span> {singlePackageDetailsTourGuide.name}</h2>
                        <p><span className='font-bold'>Experience:</span> {singlePackageDetailsTourGuide.experience} years</p>
                    </div>
                </Link>)
            }
        </div>

    );
};

export default PackageDetailsGuideLists;