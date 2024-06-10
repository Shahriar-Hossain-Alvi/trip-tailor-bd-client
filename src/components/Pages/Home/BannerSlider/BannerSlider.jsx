import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BannerSlider.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';

import sliderImg1 from "../../../../assets/images/HomeSlider/falvoursOfBD.jpg";
import sliderImg2 from "../../../../assets/images/HomeSlider/Paharpur-Buddhist-Monastery.jpg";
import sliderImg3 from "../../../../assets/images/HomeSlider/sundarbanSafari.jpeg";
import sliderImg4 from "../../../../assets/images/HomeSlider/trekkingInBandarban.jpg";
import sliderImg5 from "../../../../assets/images/HomeSlider/villageExperience.jpg";


const BannerSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className="hero h-80" style={{ backgroundImage: `url(${sliderImg1})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-left text-white w-full flex justify-start py-20">
                            <div className="ml-10 max-w-2xl">
                                <h1 className="mb-5 text-4xl md:text-5xl font-bold">Flavours Of Bangladesh</h1>
                                <p className="mb-5">Explore the culinary of our BD</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-80" style={{ backgroundImage: `url(${sliderImg2})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-left text-white w-full flex justify-start py-20">
                            <div className="ml-10 max-w-2xl">
                                <h1 className="mb-5 text-4xl md:text-5xl  font-bold">Paharpur Buddhist Monastery</h1>
                                <p className="mb-5">Explore the ancient places</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-80" style={{ backgroundImage: `url(${sliderImg3})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-left text-white w-full flex justify-start py-20">
                            <div className="ml-10 max-w-2xl">
                                <h1 className="mb-5 text-4xl md:text-5xl font-bold">Sundarban Wildlife Safari</h1>
                                <p className="mb-5">Wildlife Safari</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-80" style={{ backgroundImage: `url(${sliderImg4})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-left text-white w-full flex justify-start py-20">
                            <div className="ml-10 max-w-2xl">
                                <h1 className="mb-5 text-4xl md:text-5xl font-bold">Trekking In Bandarban</h1>
                                <p className="mb-5">Take a hiking trip with us</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-80" style={{ backgroundImage: `url(${sliderImg5})` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-left text-white w-full flex justify-start py-20">
                            <div className="ml-10 max-w-2xl">
                                <h1 className="mb-5 text-4xl md:text-5xl font-bold">Village Experience</h1>
                                <p className="mb-5">Explore the beautiful scenarios of Bangladeshi villages and take a look at their daily life closely</p>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default BannerSlider;