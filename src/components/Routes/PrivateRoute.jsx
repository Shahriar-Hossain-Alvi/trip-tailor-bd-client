import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../Utility/LoadingSpinner";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};


PrivateRoute.propTypes = {
    children: PropTypes.any
}

export default PrivateRoute;