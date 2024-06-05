import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";
import SectionTitle from "../../../Utility/SectionTitle";
import BookingTableRows from "../../../Utility/BookingTableRows";
import Swal from "sweetalert2";


const MyBookings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: myBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['myBookings', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking/${user?.email}`)
            return res.data;
        }
    });

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>


    const handleCancelButton = (id) => {
        Swal.fire({
            title: "Are you sure you want to cancel?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want to cancel my booking"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/booking/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been canceled.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div>
            <SectionTitle
                heading={'Manage Your Bookings'}
                subHeading={"This list shows all the packages you've booked. You can Cancel your chosen package or Pay to confirm your bookings"}
            ></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md  lg:table-lg">
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
                            myBookings.map((booking, index) => <BookingTableRows key={booking._id} index={index} booking={booking} handleCancelButton={handleCancelButton}></BookingTableRows>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;