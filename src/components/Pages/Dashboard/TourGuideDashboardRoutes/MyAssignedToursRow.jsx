import PropTypes from 'prop-types';


const MyAssignedToursRow = ({ idx, tour, handleAcceptButton, handleRejectButton }) => {

    const { _id, tripTitle, name, date, price, status } = tour;

    return (
        <tr>
            <th>
                {idx + 1}
            </th>
            <td>
                {tripTitle}
            </td>
            <td>
                {name}
            </td>
            <td>{date.slice(0, 15)}</td>
            <td>
                {price}
            </td>
            <td>
                {status}
            </td>
            <td>
                {
                    status === 'In Review' && <button onClick={() => handleAcceptButton(_id)} className='btn btn-success text-white'>Accept</button>
                }
                {
                    status === 'Accepted' && <div className='badge badge-outline badge-success text-white'>Accepted</div>
                }
                {
                    status === 'Rejected' && <div className='badge badge-outline badge-error text-white'>Rejected</div>
                }
            </td>
            <td>
                {
                    status === "In Review" && <button onClick={()=>handleRejectButton(_id)} className="btn btn-error text-white">Reject</button>
                }
                {
                    status === "Accepted" && <div className='badge badge-outline badge-success text-white'>Accepted</div>
                }
                {
                    status === "Rejected" && <div className='badge badge-outline badge-error text-white'>Rejected</div>
                }

            </td>
        </tr>
    );
};


MyAssignedToursRow.propTypes = {
    tour: PropTypes.object,
    idx: PropTypes.number,
    handleAcceptButton: PropTypes.func,
    handleRejectButton: PropTypes.func
}


export default MyAssignedToursRow;