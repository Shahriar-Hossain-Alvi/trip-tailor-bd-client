import SectionTitle from "../../../Utility/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import "./TourType.css"




const TourType = () => {

    const axiosPublic = useAxiosPublic();


    const { data: tourTypes = [] } = useQuery({
        queryKey: ['tourTypes'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tour-types');
            return res.data;
        }
    })
    console.log(tourTypes);

    const tours = ["heritage","adventure","cultural immersion","nature and wildlife", 'festivals and events',               
    'culinary',
    'city exploration',
    'eco-tourism',
    'luxury and leisure',
    'family-friendly',
    'photography',
    'educational and research']


    return (
        <div>
            <SectionTitle heading={'Tour Type'} subHeading={'Explore Our Diverse Tour Options Tailored to Your Interests'}></SectionTitle>


            <div className="pb-10">

                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        tours.map((tourType, idx) => <SwiperSlide className="mb-10" key={idx}>
                            <Link className="h-24 flex items-center justify-center text-lg font-bold tracking-widest font-playfairDisplay capitalize text-ttSecondary hover:text-ttPrimary">
                                {tourType}
                            </Link>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default TourType;