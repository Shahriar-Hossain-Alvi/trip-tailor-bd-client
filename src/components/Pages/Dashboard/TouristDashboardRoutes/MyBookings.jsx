import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";
import SectionTitle from "../../../Utility/SectionTitle";
import BookingTableRows from "../../../Utility/BookingTableRows";
import Swal from "sweetalert2";
import CongratsConfetti from "../../../Utility/CongratsConfetti";


const MyBookings = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    //for booking data fetching
    const { data: myBookings = [], isLoading, refetch } = useQuery({
        queryKey: ['myBookings', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/booking/${user?.email}`)
            return res.data;
        }
    });

    const totalBookings = myBookings.length;

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
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Cancelled!",
                                text: "Your booking has been canceled.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div className="mb-10">
            <SectionTitle
                heading={'Manage Your Bookings'}
                subHeading={"This list shows all the packages you've booked. You can Cancel your chosen package or Pay to confirm your bookings"}
            ></SectionTitle>

            {
                totalBookings > 3 && <div className="text-center mb-7">
                    <h2 className="badge badge-success text-white">🎊 Congratulations you have got a discount offer 🎉</h2>

                    <CongratsConfetti></CongratsConfetti>
                </div>
            }
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