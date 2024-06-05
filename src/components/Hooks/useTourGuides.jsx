import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useTourGuides = () => {
    const axiosPublic = useAxiosPublic();

    const { data: tourGuides = [], isLoading } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides')
            return res.data;
        }
    })
    return [tourGuides, isLoading];
};

export default useTourGuides;