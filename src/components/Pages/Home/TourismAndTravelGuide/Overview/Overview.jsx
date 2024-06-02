import ReactPlayer from 'react-player'

const Overview = () => {
    return (
        <div className='flex justify-center items-center'>
            <ReactPlayer controls={true} muted={true} url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
        </div>
    );
};

export default Overview;