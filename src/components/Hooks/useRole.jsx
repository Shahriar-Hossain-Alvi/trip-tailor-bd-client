import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: role = '', isLoading } = useQuery({
        queryKey: ['role', user],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`);
            return res.data?.role;
        }
    })

    return [role, isLoading];
};

export default useRole;