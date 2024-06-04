import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Utility/LoadingSpinner";
import BannerSlider from "../BannerSlider/BannerSlider";
import TourType from "../TourType/TourType";
import TourismAndTravelGuide from "../TourismAndTravelGuide/TourismAndTravelGuide";
import TouristStory from "../TouristStory/TouristStory";



const Home = () => {
    const {loading} = useAuth();

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

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