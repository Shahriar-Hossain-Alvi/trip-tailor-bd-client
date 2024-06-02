import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-8'>
            <h2 className='font-playfairDisplay text-4xl font-bold text-ttPrimary mb-2'>{heading}</h2>
            <p className='font-medium mx-5 text-ttTerTiary'>{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

export default SectionTitle;