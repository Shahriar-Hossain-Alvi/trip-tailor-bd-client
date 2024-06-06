import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WishlistTableRows = ({ wishlist, index, handleDeleteWishlist }) => {

    const { _id, tripTitle, tourType, price, wishlistImage, packageId } = wishlist;

    return (
        <tr className='text-center hover'>
            <th>{index + 1}</th>
            <td><img className='max-w-16 h-full' src={wishlistImage} alt="" /></td>
            <td className='text-ttPrimary font-medium'>{tripTitle}</td>
            <td className='text-ttPrimary font-medium'>{tourType}</td>
            <td className='text-ttPrimary font-medium'>{price}</td>
            <td>
                <button onClick={()=>handleDeleteWishlist(_id)} className="btn btn-error text-white">Delete</button>
            </td>
            <td>
                <Link to={`/packageDetails/${packageId}`}>
                    <button className="btn bg-ttPrimary text-white hover:bg-blue-800">Visit Details</button>
                </Link>
            </td>
        </tr>
    );
};

WishlistTableRows.propTypes = {
    wishlist: PropTypes.object,
    index: PropTypes.number,
    handleDeleteWishlist: PropTypes.func
}

export default WishlistTableRows;