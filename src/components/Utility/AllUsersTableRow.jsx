import PropTypes from 'prop-types';


const AllUsersTableRow = ({ singleUser, index, handleUpdateRole, handleMakeAdmin }) => {
    const { _id, role, name, email, status } = singleUser;

    return <tr className=' hover'>
        <th>{index + 1}</th>
        <td className='text-ttPrimary font-medium'>{name}</td>
        <td className='text-ttPrimary font-medium'>{email}</td>
        <td className='text-ttSecondary font-semibold'>{role}</td>

        <td className='text-ttPrimary font-medium'>
            {status === 'requested' &&
                <button onClick={() => handleUpdateRole(_id)} className='btn bg-ttPrimary text-white hover:bg-green-700'>Make tour Guide</button>
            }
            {
                status === 'accepted' &&
                <button disabled className="btn">Accepted</button>
            }
        </td>
        <td className='font-medium'>
            {
                status === 'accepted' ?
                    <button disabled className="btn">Accepted</button>
                    :
                    <button onClick={() => handleMakeAdmin(_id)} className='btn btn-error text-white'>Make Admin</button>
            }
        </td>
    </tr>
};

AllUsersTableRow.propTypes = {
    singleUser: PropTypes.object,
    index: PropTypes.number,
    handleUpdateRole: PropTypes.func,
    handleMakeAdmin: PropTypes.func
}


export default AllUsersTableRow;