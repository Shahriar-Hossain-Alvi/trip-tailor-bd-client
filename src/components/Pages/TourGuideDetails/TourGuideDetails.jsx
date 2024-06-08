import { useLoaderData } from "react-router-dom";


const TourGuideDetails = () => {
    const tourGuideDetails = useLoaderData();
    console.log(tourGuideDetails);
    const { education, email, experience, imgURL, name, phoneNumber, skills } = tourGuideDetails;

    return (
        <div className="mx-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="order-2">
                <img className="max-h-screen" src={imgURL} alt="guide image" />
            </div>

            <div className="col-span-2 ml-5 flex flex-col justify-center gap-1">
                <h2 className="font-medium text-xl capitalize mb-2"><span className="font-bold">Name:</span> {name}</h2>
                <h2 className="font-medium text-xl capitalize mb-2"><span className="font-bold">Email:</span> {email}</h2>
                <h2 className="font-medium text-xl capitalize mb-2"><span className="font-bold">phone Number:</span> {phoneNumber}</h2>
                <h2 className="font-medium text-xl capitalize mb-2"><span className="font-bold">Education:</span> {education}</h2>
                <h2 className="font-medium text-xl capitalize mb-2"><span className="font-bold">Skils:</span> {skills}</h2>
                <h2 className="font-medium text-xl capitalize mb-2"><span className="font-bold">Experience:</span> {experience} years</h2>
            </div>

        </div>
    );
};

export default TourGuideDetails;