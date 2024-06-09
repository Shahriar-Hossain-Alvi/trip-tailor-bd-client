import { useQuery } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import DaisyLoadingSpinner from './DaisyLoadingSpinner';

const BookingTableRows = ({ index, booking, handleCancelButton }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, date, price, tripTitle, selectedTourGuide, status } = booking;

    const { data: paymentInfo = {}, isLoading } = useQuery({
        queryKey: ['paymentInfo', booking, _id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${_id}`)
            return res.data;
        }
    })

    if (isLoading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

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
                    <div>
                        {paymentInfo.bookingId === _id
                            ?
                            <button className="badge badge-success text-white cursor-text">Paid</button>
                            :
                            <Link booking={booking} to={`/dashboard/myBookings/payment/${_id}`}>
                                <button className="btn btn-sm bg-ttPrimary text-white hover:bg-blue-600">Pay</button>
                            </Link>
                        }

                    </div>

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