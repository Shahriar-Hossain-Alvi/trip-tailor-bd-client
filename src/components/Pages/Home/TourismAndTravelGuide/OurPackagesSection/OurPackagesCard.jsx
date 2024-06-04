import { FaHeart } from "react-icons/fa";

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

const OurPackagesCard = ({ singlePackage }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { _id, spotImages, tourType, tripTitle, price } = singlePackage;

    const firstImage = spotImages[0];

    const handleAddToWishList = async (id) => {
        const wishlist = {
            packageId: id,
            name: user?.displayName, email: user?.email, imgURL: user?.photoURL, tourType, tripTitle, price, wishlistImage: firstImage,
        }

        const res = await axiosSecure.post('/wishlist', wishlist);
        if (res.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Package added to the wishlist",
                showConfirmButton: false,
                timer: 1500,
                background: '#061A3A',
                color: '#ff7c5b'
            });
        }
        else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500,
                background: '#061A3A',
                color: '#ff7c5b'
            });
        }
    }

    return (
        <div className="p-5 border border-ttTerTiary rounded border-opacity-20 group h-[400px] flex flex-col">
            <div className="relative overflow-hidden">
                <img className="group-hover:scale-110 transition w-full h-full" src={firstImage} alt="" />

                <div className="flex justify-between bg-black bg-opacity-60 bottom-0 absolute w-full p-2">
                    <p className="text-white">{price} <span className="italic text-ttSecondary font-bold">tk</span> </p>
                    <FaHeart onClick={() => handleAddToWishList(_id)} className="text-ttSecondary text-2xl cursor-pointer hover:text-white transition" />
                </div>
            </div>


            <div className="mt-5 flex-1">
                <h2 className="text-xl font-bold capitalize mb-1">{tripTitle}</h2>
                <h4 className="text-ttTerTiary font-semibold mb-2  capitalize">Trip Type: {tourType}</h4>
            </div>
            <Link to={`/packageDetails/${_id}`}>
                <button className="btn btn-block bg-ttSecondary text-white hover:bg-ttPrimary">View Package</button>
            </Link>
        </div>
    );
};

OurPackagesCard.propTypes = {
    singlePackage: PropTypes.object
}

export default OurPackagesCard;