import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';


const BlogsCommentsCard = ({ singleComment }) => {
    const { rating, tourGuideImgURL, tourGuideName, touristImgURL, touristName, comment } = singleComment;

    return (
        <div className='flex gap-2 justify-between mx-1 md:mx-2'>
            <div className='w-32 flex justify-center pt-5'>
                <img className='rounded-full w-8 h-8' src={touristImgURL} alt="tourist image" />
            </div>

            <div className='bg-ttPrimary text-white rounded-md p-5 font-bold'>
                <h2 className='mb-2'>Tourist Name: <span className='font-medium'>{touristName}</span></h2>
                <p className='mb-5 indent-32'>-<span className='font-normal'>{comment}</span></p>
                <h4 className='flex items-center gap-1'>Ratings: {rating} <FaStar className='text-ttSecondary' /></h4>


                <div className='flex flex-col justify-center items-end'>
                    <h2>About:</h2>
                    <div className='flex gap-1 items-center'>
                        <p className='font-thin'> <span className='font-medium'>{tourGuideName}</span>(tour guide)</p>
                        <img className='rounded-full w-8 h-8' src={tourGuideImgURL} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

BlogsCommentsCard.propTypes = {
    singleComment: PropTypes.object
}

export default BlogsCommentsCard;