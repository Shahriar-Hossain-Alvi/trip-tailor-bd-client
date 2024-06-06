import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Utility/SectionTitle";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";


const RequestToaAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const [formLoading, setFormLoading] = useState(false);

    const { data: isRequestAccepted = {}, refetch } = useQuery({
        queryKey: ['isRequestAccepted', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data;
        }
    })

    const onSubmit = async (data) => {
        setFormLoading(true)
        const updatedUserInfo = {
            name: user?.email,
            email: user?.email,
            imgURL: user?.photoURL,
            role: 'tourist',
            phoneNumber: parseInt(data.phoneNumber),
            education: data.education,
            skills: data.skills,
            experience: parseInt(data.experience),
            status: 'requested'
        }

        const res = await axiosSecure.put('/users', updatedUserInfo);

        if (res.data.modifiedCount > 0) {
            setFormLoading(false);
            toast.success('Requested Successfully');
            reset();
            refetch();
        }
    }

    return (
        <div>
            <SectionTitle
                heading={'Want to be a Tour Guide?'}
                subHeading={'Fill out the form below to make a request to be a Tour Guide'}
            ></SectionTitle>


            <div>
                <div className="text-center">
                    {
                        isRequestAccepted.status === "requested" && <div className="badge badge-error badge-lg h-12 text-white">Wait for Admin approval</div>
                    }
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className={`card-body ${isRequestAccepted.status === "requested" && 'hidden'}`}>

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
                                <button className="btn bg-ttPrimary text-white hover:bg-ttSecondary">Submit Request</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RequestToaAdmin;