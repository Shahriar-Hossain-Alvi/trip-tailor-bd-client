import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";
import SectionTitle from "../../../Utility/SectionTitle";
import WishlistTableRows from "../../../Utility/WishlistTableRows";


const MyWishlist = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: MyWishlist = [], isLoading } = useQuery({
        queryKey: ['MyWishlist', user],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist/${user?.email}`)
            return res.data;
        }
    })

    if(isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    console.log(MyWishlist);

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
                            MyWishlist.map((wishlist, index) => <WishlistTableRows key={wishlist._id} index={index} wishlist={wishlist}></WishlistTableRows>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyWishlist;