import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookingTableRows = ({ index, booking, handleCancelButton }) => {
    const { _id, date, price, tripTitle, selectedTourGuide, status } = booking;

    return (
        <tr className='text-center hover'>
            <th>{index + 1}</th>
            <td className='text-ttPrimary font-medium'>{tripTitle}</td>
            <td className='text-ttPrimary font-medium'>{selectedTourGuide}</td>
            <td className='text-ttPrimary font-medium'>{date.slice(0, 15)}</td>
            <td className='text-ttPrimary font-medium'>{price}</td>
            <td className='text-ttSecondary font-semibold'>{status}</td>
            <td>
                {
                    status === "In Review" &&
                    <button onClick={() => handleCancelButton(_id)} className="btn btn-sm bg-red-600 text-white hover:bg-ttSecondary">Cancel</button>
                }
                {
                    status === "Accepted" &&
                    <Link booking={booking} to={`/dashboard/myBookings/payment/${_id}`}>
                        <button className="btn btn-sm bg-ttPrimary text-white hover:bg-blue-600">Pay</button>
                    </Link>
                }
                {
                    status === "Rejected" &&
                    <div className="badge badge-error badge-lg text-white gap-2">
                        Rejected
                    </div>
                }
            </td>
        </tr>
    );
};


BookingTableRows.propTypes = {
    booking: PropTypes.object,
    index: PropTypes.number,
    handleCancelButton: PropTypes.func
}

export default BookingTableRows;