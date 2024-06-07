
const OverViewSection = () => {

    return (
        <div className="mx-1 md:mx-2">
            <h2 className="text-xl font-medium text-center mb-8 text-ttPrimary">The videos below will give you a quick overview of our services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/JLjvEYMBGzQ?si=AMmPm-YUAyDBm3eZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


                <iframe width="100%" height="315" src="https://www.youtube.com/embed/Z44fFqBQQtg?si=fLk8YDKezKXmf3z8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>

    );
};

export default OverViewSection;