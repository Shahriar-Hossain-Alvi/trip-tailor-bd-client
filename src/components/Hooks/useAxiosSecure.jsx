import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://trip-tailor-bd-server.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser, setLoading } = useAuth();

      
    //request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, (error) => {
        // Do something with request error
        return Promise.reject(error);
    })


    axiosSecure.interceptors.response.use(function (response) {
        //response within the range of 2xx
        return response;
    }, async (error) => {
        // status that falls outside 2xx
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logoutUser();
            setLoading(false);
            navigate('/login');
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;