import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import TouristStoryCard from "../Home/TouristStory/TouristStoryCard";
import DaisyLoadingSpinner from "../../Utility/DaisyLoadingSpinner";


const AllStories = () => {
    const axiosPublic = useAxiosPublic();


    const { data: stories = [], isLoading } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories');
            return res.data;
        }
    })

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div className="py-10">
            <h2 className="text-center font-bold text-3xl text-ttPrimary mb-10">Explore all the stories written by our beloved tourist</h2>

            <div className="mx-1 md:mx-2 grid gap-2 md:gap-3 lg:gap-5 lg:grid-cols-2">
                {
                    stories.map(story => <div className="border p-5 rounded-2xl border-ttPrimary" key={story._id}>
                        <TouristStoryCard story={story}></TouristStoryCard>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllStories;