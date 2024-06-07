import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MeetOurGuidesCard = ({ meetGuide }) => {
    const { email, imgURL, role, _id, experience, name } = meetGuide;
    return (
        <div className="card border p-1">
            <div>
                <div className="px-10 rounded-t-xl pt-10 bg-ttPrimary relative h-32">
                    <img src={imgURL} alt="tour guide image" className="rounded-full w-28 h-28 absolute -bottom-10 border-4" />
                </div>

                <div className="card-body ">
                    <div className='text-right'>
                        <h2 className="font-bold text-xl text-ttPrimary">{name}</h2>
                        <h4 className='capitalize font-medium text-ttTerTiary'>{role}</h4>
                    </div>

                    <div className='text-left space-y-2 font-medium'>
                        <h2><span className='font-bold'>ID:</span> {_id}</h2>
                        <h3><span className='font-bold'>Email:</span> {email}</h3>
                        <h5><span className='font-bold'>Experience:</span> {experience} years</h5>
                    </div>

                    <div className="card-actions">
                        <Link to={`/tourGuideDetails/${_id}`}>
                            <button className="btn bg-ttPrimary text-white border-ttPrimary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


MeetOurGuidesCard.propTypes = {
    meetGuide: PropTypes.object
}

export default MeetOurGuidesCard;