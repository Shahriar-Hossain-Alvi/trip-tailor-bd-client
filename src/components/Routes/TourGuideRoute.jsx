import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Utility/LoadingSpinner";
import PropTypes from 'prop-types';
import useRole from "../Hooks/useRole";


const TourGuideRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const [role] = useRole();


    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user && role === 'admin') {
        return children;
    }

    return <Navigate to='/' state={{ from: location }}></Navigate>
};

TourGuideRoute.propTypes = {
    children: PropTypes.any
}

export default TourGuideRoute;