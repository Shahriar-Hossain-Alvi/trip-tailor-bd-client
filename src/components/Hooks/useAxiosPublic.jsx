import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://trip-tailor-bd-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;