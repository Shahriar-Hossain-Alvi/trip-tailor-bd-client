import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import TouristStoryCard from "./TouristStoryCard";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './TouristStoryCard'
import { Pagination, Navigation } from 'swiper/modules';



const TouristStory = () => {
    const axiosPublic = useAxiosPublic();

    const { data: stories = [] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/stories');
            return res.data;
        }
    })

    console.log(stories);

    return (
        <div className="py-10">
            <div className=" bg-ttPrimaryBg">
                <Swiper navigation={true} className="mySwiper2"
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {
                        stories.map(story =>
                            <SwiperSlide key={story._id}>
                                <TouristStoryCard story={story}></TouristStoryCard>
                            </SwiperSlide>
                        )
                    }

                </Swiper>

            </div>
        </div>
    );
};

export default TouristStory;