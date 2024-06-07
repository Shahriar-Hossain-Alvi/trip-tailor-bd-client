import useAuth from "../Hooks/useAuth";
import DaisyLoadingSpinner from "./DaisyLoadingSpinner";

const UserDetails = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <DaisyLoadingSpinner></DaisyLoadingSpinner>
    }

    return (
        <div className="mx-auto text-center">
            <div className="w-28 h-28 rounded-full shadow-2xl mx-auto mb-6">
                <img className="rounded-full w-28 h-28" src={user?.photoURL} alt="user image" />
            </div>
            <h2 className="font-medium text-xl capitalize mb-2">Name: {user?.displayName}</h2>
            <h4 className="text-lg font-medium mb-2">Email: {user?.email}</h4>

            <h5 className="text-lg text-ttTerTiary font-medium mb-2">User Since: {user?.metadata.creationTime}</h5>

            <h5 className="text-lg text-ttTerTiary font-medium">Last login: {user?.metadata.lastSignInTime}</h5>
        </div>
    );
};

export default UserDetails;