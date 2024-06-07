import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Utility/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";
import MyAssignedToursRow from "./MyAssignedToursRow";
import Swal from "sweetalert2";


const MyAssignedTours = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: assignedTours = [], refetch } = useQuery({
        queryKey: ['assignedTours', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/myTours/${user?.displayName}`)
            return res.data;
        }
    })

    console.log(assignedTours);

    if (loading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    const handleAcceptButton = async (id) => {
        Swal.fire({
            title: "Accept this trip?",
            icon: "warning",
            background: "#061A3A",
            showCancelButton: true,
            confirmButtonColor: "green",
            color: "#ffffff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/wishlist/accept/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done!",
                                text: "You have accepted this trip.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleRejectButton = async (id) => {
        Swal.fire({
            title: "Reject this trip?",
            icon: "warning",
            background: "#061A3A",
            showCancelButton: true,
            confirmButtonColor: "green",
            color: "#ffffff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject this trip"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/wishlist/reject/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done!",
                                text: "Trip rejected",
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
                heading={'Assigned Tours'}
                subHeading={'Below is the list of tours assigned to you'}
            ></SectionTitle>


            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Package Title</th>
                                <th>Tourist Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row */}
                            {
                                assignedTours.map((tour, idx) => <MyAssignedToursRow key={tour._id} idx={idx} tour={tour}
                                    handleAcceptButton={handleAcceptButton}
                                    handleRejectButton={handleRejectButton}
                                ></MyAssignedToursRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAssignedTours;