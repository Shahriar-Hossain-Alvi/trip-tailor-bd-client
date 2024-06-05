import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";
import SectionTitle from "../../../Utility/SectionTitle";
import BookingTableRows from "../../../Utility/BookingTableRows";


const MyBookings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: myBookings = [], isLoading } = useQuery({
        queryKey: ['myBookings', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking/${user?.email}`)
            return res.data;
        }
    });

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div>
            <SectionTitle
                heading={'Manage Your Bookings'}
                subHeading={"This list shows all the packages you've booked. You can Cancel your chosen package or Pay to confirm your bookings"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Package Title</th>
                            <th>Tour Guide</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            myBookings.map((booking, index) => <BookingTableRows key={booking._id} index={index} booking={booking}></BookingTableRows>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;