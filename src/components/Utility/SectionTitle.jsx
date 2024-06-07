import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-10'>
            <h2 className='font-playfairDisplay md:text-4xl text-2xl lg:text-5xl font-bold text-ttPrimary mb-3'>{heading}</h2>
            <p className='font-medium max-w-md md:max-w-xl mx-auto text-ttTerTiary'>{subHeading}</p>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

export default SectionTitle;