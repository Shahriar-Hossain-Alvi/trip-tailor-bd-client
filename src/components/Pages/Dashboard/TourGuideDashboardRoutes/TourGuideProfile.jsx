import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Utility/SectionTitle";
import UserDetails from "../../../Utility/UserDetails";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { ImSpinner9 } from "react-icons/im";


const TourGuideProfile = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, } = useForm();
    const [formLoading, setFormLoading] = useState(false);

    const { data: isProfileUpdated = {}, refetch } = useQuery({
        queryKey: ['isProfileUpdated', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data;
        }
    })


    const onSubmit = async (data) => {
        setFormLoading(true)
        const updatedUserInfo = {
            email: user?.email,
            phoneNumber: data?.phoneNumber,
            education: data?.education,
            skills: data?.skills,
            experience: data?.experience,
            status: isProfileUpdated?.status,
            profileUpdateStatus: 'updated'
        }

        const res = await axiosSecure.put('/users', updatedUserInfo);
        console.log(res);

        if (res.data.modifiedCount > 0) {
            setFormLoading(false);
            toast.success('Profile updated Successfully');
            reset();
            refetch();
        }
    }

    return (
        <div className="pb-20">
            <ToastContainer></ToastContainer>
            <h2 className="text-4xl text-ttPrimary font-medium italic text-center">Welcome! <span className="font-bold">{user?.displayName}</span>, This is your dashboard</h2>

            <SectionTitle heading={'Your Info'} subHeading={'Here is the detailed information of you'}></SectionTitle>

            <UserDetails></UserDetails>

            {/* add guide info form */}
            <form onSubmit={handleSubmit(onSubmit)} className={`card-body ${isProfileUpdated.profileUpdateStatus === "updated" && 'hidden'}`}>

                {/* contact details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Add your phone number</span>
                    </label>
                    <input  {...register("phoneNumber", { required: true })} type="text" placeholder="Enter your phone number" className="input input-bordered" />
                </div>


                {/* education */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <textarea {...register("education", { required: true })} type="text" placeholder="Write your educational history" className="textarea textarea-bordered" />
                </div>

                {/* skill */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Skills</span>
                    </label>
                    <input {...register("skills", { required: true })} type="text" placeholder="What skills do you have?" className="input input-bordered" />
                </div>

                {/* experience */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Experience</span>
                    </label>
                    <input {...register("experience", { required: true })} type="number" placeholder="How many years of experience do you have?" className="input input-bordered" />
                </div>


                <div className="form-control mt-6">
                    {
                        formLoading ?
                            <button disabled={formLoading} className="btn bg-ttPrimary text-white"><ImSpinner9 className="animate-spin" /></button>
                            :
                            <button className="btn bg-ttPrimary text-white hover:bg-ttSecondary">Update Profile</button>
                    }
                </div>
            </form>


            <div className={`mt-10 ${isProfileUpdated.profileUpdateStatus === "updated" ? 'block' : 'hidden'}`}  >
                <h2 className="text-center font-bold text-ttPrimary text-4xl mb-6">Additional Info</h2>
                
                <ul className="text-lg font-medium text-ttTerTiary max-w-xl mx-auto space-y-1">
                    <li><span className="text-ttPrimary font-semibold">Contact Number:</span> {isProfileUpdated?.phoneNumber}</li>

                    <li><span className="text-ttPrimary font-semibold">Experience:</span> {isProfileUpdated?.experience} years</li>

                    <li><span className="text-ttPrimary font-semibold">Skills:</span> {isProfileUpdated?.skills}</li>

                    <li><span className="text-ttPrimary font-semibold">Education:</span> {isProfileUpdated?.education}</li>
                </ul>

            </div>
        </div>
    );
};

export default TourGuideProfile;