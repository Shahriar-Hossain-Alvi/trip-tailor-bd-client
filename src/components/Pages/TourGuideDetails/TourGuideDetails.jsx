import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SectionTitle from "../../Utility/SectionTitle";
import { ImSpinner9 } from "react-icons/im";


const TourGuideDetails = () => {
    const tourGuideDetails = useLoaderData();
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const { education, email, experience, imgURL, name, phoneNumber, skills } = tourGuideDetails;

    const onSubmit = async (data) => {
        const commentInfo = {
            rating: parseFloat(data?.rating),
            comment: data?.comment,
            tourGuideEmail: tourGuideDetails?.email,
            tourGuideName: tourGuideDetails?.name,
            tourGuideImgURL: tourGuideDetails?.imgURL,
            touristEmail: user?.email,
            touristName: user?.displayName,
            touristImgURL: user?.photoURL,
        }
        
        const commentRes = await axiosSecure.post('/comments', commentInfo);

        if (commentRes.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully added your comment",
                showConfirmButton: true,
            });
            reset();
        }
    }

    return (
        <div>
            {/* guide info */}
            <div className="mx-auto py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="order-2">
                    <img className="max-h-screen mx-auto" src={imgURL} alt="guide image" />
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


            {/* guide review form */}
            <div className="w-full">
                <SectionTitle
                    heading={'Review Tour Guide'}
                    subHeading={'Share your thoughts about this tour guide'}
                ></SectionTitle>


                {/* form start */}
                <div className="w-11/12 mx-auto">
                    <div className="card shrink-0 w-full mx-auto shadow-ttTerTiary border border-ttTerTiary border-opacity-25">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div>
                                {/* rating */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating (out of 5)<span className="text-red-500">*</span></span>
                                    </label>
                                    <input {...register("rating", { required: true })} type="text" placeholder="Enter rating" className="input input-bordered" />
                                </div>

                                {/* comment */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Comment<span className="text-red-500">*</span></span>
                                    </label>
                                    <textarea {...register("comment", { required: true })} type="text" placeholder="Share your experience..." className=" textarea textarea-bordered textarea-lg" />
                                </div>
                            </div>




                            {/* button */}
                            <div className="form-control mt-6">
                                {
                                    user ? <button disabled={loading} className="btn bg-ttPrimary text-white hover:bg-ttSecondary">
                                        {
                                            loading ? <ImSpinner9 className="animate-spin" />
                                                :
                                                'Post your comment'
                                        }
                                    </button>
                                        :
                                        <button disabled className="btn bg-ttPrimary text-white hover:bg-ttSecondary">
                                            Pleas login before adding your comment
                                        </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuideDetails;