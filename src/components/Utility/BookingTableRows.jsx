import PropTypes from 'prop-types';

const BookingTableRows = ({ index, booking, handleCancelButton }) => {
    const { _id, date, price, tripTitle, selectedTourGuide, status } = booking;

    // todo cancel btn function



    return (
        <tr>
            <th>{index + 1}</th>
            <td>{tripTitle}</td>
            <td>{selectedTourGuide}</td>
            <td>{date.slice(0, 15)}</td>
            <td>{price}</td>
            <td>{status}</td>
            <td>
                {
                    status === "In Review" &&
                    <button onClick={() => handleCancelButton(_id)} className="btn btn-sm bg-red-600 text-white hover:bg-ttSecondary">Cancel</button>
                }
                {
                    status === "Accepted" &&
                    <button className="btn btn-sm bg-ttPrimary text-white hover:bg-blue-600">Pay</button>
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