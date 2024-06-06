import useAuth from "../../../Hooks/useAuth";
import LoadingSpinner from "../../../Utility/LoadingSpinner";
import SectionTitle from "../../../Utility/SectionTitle";
import UserDetails from "../../../Utility/UserDetails";


const AdminProfile = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }


    return (
        <div>
             <h2 className="text-4xl text-ttPrimary font-medium italic">Welcome! <span className="font-bold">{user?.displayName}</span>, This is your dashboard</h2>

            <SectionTitle heading={'Your Info'} subHeading={'Here is the detailed information of you'}></SectionTitle>

            <UserDetails></UserDetails>

        </div>
    );
};

export default AdminProfile;