import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MeetOurGuidesCard = ({ meetGuide }) => {
    const { phoneNumber, imgURL, _id, name } = meetGuide;
    return (
        <div className="card border p-1">
            <div className='lg:flex'>
                <div className="bg-ttPrimary relative  lg:rounded-l-xl h-28 lg:h-full lg:w-2/12">
                    <img src={imgURL} alt="tour guide image" className="rounded-full w-20 h-20 absolute -bottom-10 lg:-bottom-0 left-4 lg:left-12 lg:top-1/2 lg:-translate-y-1/2 border-4" />
                </div>

                <div className="card-body lg:flex lg:flex-row lg:justify-evenly lg:w-10/12 lg:items-center text-right lg:text-left mt-0">
                    <h2 className="font-bold text-xl text-ttPrimary lg:w-2/5">{name}</h2>

                    <h5 className='lg:w-2/5'><span className='font-bold'>Phone:</span> {phoneNumber}</h5>

                    <div className="card-actions w-full lg:w-1/5">
                        <Link className='w-full' to={`/tourGuideDetails/${_id}`}>
                            <button className="btn bg-ttPrimary text-white border-ttPrimary hover:bg-ttSecondary w-full">Details</button>
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