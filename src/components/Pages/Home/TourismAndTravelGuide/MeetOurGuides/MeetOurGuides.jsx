import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import DaisyLoadingSpinner from "../../../../Utility/DaisyLoadingSpinner";
import MeetOurGuidesCard from "./MeetOurGuidesCard";


const MeetOurGuides = () => {
    const axiosPublic = useAxiosPublic();
    const { data: meetTourGuides = [], isLoading } = useQuery({
        queryKey: ['meetTourGuides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides');
            return res.data;
        }
    })

    console.log(meetTourGuides)


    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>


    return (
        <div>
            <h2 className="text-center text-ttPrimary font-semibold tracking-wider text-3xl mb-5">Meet Our experienced <span className="text-ttSecondary capitalize">Tour Guides</span></h2>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {
                    meetTourGuides.map(meetGuide => <MeetOurGuidesCard 
                        key={meetGuide._id}
                        meetGuide={meetGuide}

                        ></MeetOurGuidesCard>)
                }
            </div>

        </div>
    );
};

export default MeetOurGuides;