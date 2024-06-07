import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Utility/SectionTitle";
import { ToastContainer, toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";


const RequestToaAdmin = () => {
    const navigate = useNavigate();
    const { user, logoutUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { handleSubmit, reset } = useForm();
    const [formLoading, setFormLoading] = useState(false);

    const { data: isRequestAccepted = {}, refetch } = useQuery({
        queryKey: ['isRequestAccepted', user],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/${user?.email}`)
            return res.data;
        }
    })
;

    if (user && isRequestAccepted.role === 'tour guide') {
        navigate('/');
        logoutUser();
    }

    const onSubmit = async () => {
        setFormLoading(true)
        const updatedUserInfo = {
            email: user?.email,
            status: 'requested'
        }

        const res = await axiosSecure.put('/users', updatedUserInfo);
        console.log(res);

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
            <ToastContainer></ToastContainer>

            <div>
                <div className="text-center">
                    {
                        isRequestAccepted.status === "requested" && <div className="badge badge-error badge-lg h-12 text-white">Wait for Admin approval</div>
                    }
                </div>


                <form onSubmit={handleSubmit(onSubmit)} className={`card-body ${isRequestAccepted.status === "requested" && 'hidden'}`}>

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