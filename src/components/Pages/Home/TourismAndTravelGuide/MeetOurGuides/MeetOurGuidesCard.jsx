import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MeetOurGuidesCard = ({ meetGuide }) => {
    const { phoneNumber, imgURL, _id, name } = meetGuide;
    return (
        <div className="card border p-1">
            <div className='flex'>
                <div className="bg-ttPrimary relative  rounded-l-xl w-2/12">
                    <img src={imgURL} alt="tour guide image" className="rounded-full w-20 h-20 absolute left-12 top-1/2 -translate-y-1/2 border-4" />
                </div>

                <div className="card-body flex flex-row justify-evenly w-10/12 items-center">
                    <h2 className="font-bold text-xl text-ttPrimary w-2/5">{name}</h2>

                    <h5 className='w-2/5'><span className='font-bold'>Phone:</span> {phoneNumber}</h5>

                    <div className="card-actions w-1/5">
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