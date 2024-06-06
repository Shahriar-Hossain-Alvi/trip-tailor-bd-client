import BannerSlider from "../BannerSlider/BannerSlider";
import TourType from "../TourType/TourType";
import TourismAndTravelGuide from "../TourismAndTravelGuide/TourismAndTravelGuide";
import TouristStory from "../TouristStory/TouristStory";



const Home = () => {

    return (
        <div>
            <BannerSlider></BannerSlider>
            <TourismAndTravelGuide></TourismAndTravelGuide>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;