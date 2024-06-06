import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const WishlistTableRows = ({ wishlist, index, handleDeleteButton }) => {

    const { _id, tripTitle, tourType, price, wishlistImage } = wishlist;

    return (
        <tr className='text-center hover'>
            <th>{index + 1}</th>
            <td><img className='max-w-16 h-full' src={wishlistImage} alt="" /></td>
            <td className='text-ttPrimary font-medium'>{tripTitle}</td>
            <td className='text-ttPrimary font-medium'>{tourType}</td>
            <td className='text-ttPrimary font-medium'>{price}</td>
            <td>
                <button onClick={()=>handleDeleteButton(_id)} className="btn btn-error text-white">Delete</button>
            </td>
            <td>
                <Link>
                    <button className="btn bg-ttPrimary text-white hover:bg-blue-800">Visit Details</button>
                </Link>
            </td>
        </tr>
    );
};

WishlistTableRows.propTypes = {
    wishlist: PropTypes.object,
    index: PropTypes.number,
    handleDeleteButton: PropTypes.func
}

export default WishlistTableRows;