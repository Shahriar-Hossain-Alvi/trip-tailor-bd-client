import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Utility/LoadingSpinner";
import BannerSlider from "../BannerSlider/BannerSlider";
import TourType from "../TourType/TourType";
import TourismAndTravelGuide from "../TourismAndTravelGuide/TourismAndTravelGuide";



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
        </div>
    );
};

export default Home;