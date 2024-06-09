import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";
import SectionTitle from "../../../Utility/SectionTitle";
import WishlistTableRows from "../../../Utility/WishlistTableRows";
import Swal from "sweetalert2";


const MyWishlist = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: MyWishlist = [], isLoading, refetch } = useQuery({
        queryKey: ['MyWishlist', user],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist/${user?.email}`)
            return res.data;
        }
    })

    const handleDeleteWishlist = id =>{
        Swal.fire({
            title: "Are you sure you want to remove this package from your wishlist?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/wishlist/${id}`)
                    .then(res => {
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

    if(isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    return (
        <div>
            <SectionTitle 
                heading={'Wishlist'}
                subHeading={'Here this the list of  packages you have added in your wishlist'}
            ></SectionTitle>

<div className="overflow-x-auto">
                <table className="table table-xs md:table-md  lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Package Title</th>
                            <th>Tour type</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            MyWishlist.map((wishlist, index) => <WishlistTableRows key={wishlist._id} index={index} handleDeleteWishlist={handleDeleteWishlist} wishlist={wishlist}></WishlistTableRows>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;