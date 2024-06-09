/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Utility/SectionTitle";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DaisyLoadingSpinner from "../../Utility/DaisyLoadingSpinner";
import TouristStoryCard from "../Home/TouristStory/TouristStoryCard";
import { SlCalender } from "react-icons/sl";
import { SiStorybook } from "react-icons/si";
import { FaComments, FaUsers } from "react-icons/fa";
import { TbPackages } from "react-icons/tb";


const Community = () => {
    const axiosPublic = useAxiosPublic();
    const { data: featuredStories = [], isLoading } = useQuery({
        queryKey: ['featuredStories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/featuredStories');
            return res.data;
        }
    })

    const { data: allDocs = {} } = useQuery({
        queryKey: ['allDocs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/total');
            return res.data;
        }
    })

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div>
            <SectionTitle
                heading={'Welcome to our Community page'}
                subHeading={''}
            ></SectionTitle>

            <div className="my-10">
                <h2 className='text-3xl font-bold text-center font-montserrat mb-6'>Heres a short overview of our users and collections</h2>

                <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-2 justify-between items-center text-center bg-ttPrimary py-8 text-white px-10'>
                    <div>
                        <FaUsers className="w-10 h-10 mx-auto" />
                        <p>{allDocs.totalUsers}</p>
                        <h2>Users & Guides</h2>
                    </div>
                    <div>
                        <TbPackages className="w-10 h-10 mx-auto" />
                        <p>{allDocs.totalPackages}</p>
                        <h2>Packages</h2>
                    </div>
                    <div>
                        <SiStorybook className="w-10 h-10 mx-auto" />
                        <p>{allDocs.totalStories}</p>
                        <h2>Stories</h2>
                    </div>
                    <div>
                        <SlCalender className="w-10 h-10 mx-auto" />
                        <p>{allDocs.totalBookings}</p>
                        <h2>Total Bookings</h2>
                    </div>
                    <div>
                        <FaComments className="w-10 h-10 mx-auto" />
                        <p>{allDocs.totalComments}</p>
                        <h2>Total Comments</h2>
                    </div>

                </div>
            </div>


            <h2 className="text-center font-semibold text-4xl mb-10">Featured Stories</h2>
            <div className="mx-1 md:mx-2 grid gap-2 md:gap-3 lg:gap-5 lg:grid-cols-2">
                {
                    featuredStories.map(story => <div key={story._id} className="border p-5 rounded-2xl border-ttPrimary">
                        <TouristStoryCard
                            story={story}></TouristStoryCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Community;