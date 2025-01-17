import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Utility/LoadingSpinner";
import PropTypes from 'prop-types';
import useRole from "../Hooks/useRole";


const TourGuideRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [role, isLoading] = useRole();


    if (loading || isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && role === 'tour guide') {
        return children;
    }

    return <Navigate to='/' state={{ from: location }}></Navigate>
};

TourGuideRoute.propTypes = {
    children: PropTypes.any
}

export default TourGuideRoute;