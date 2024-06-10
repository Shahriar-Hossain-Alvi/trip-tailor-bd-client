import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Utility/SectionTitle";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import LoadingSpinner from "../../../Utility/LoadingSpinner";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";


const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;


const AddPackage = () => {
    const { loading } = useAuth();
    const [formLoading, setFormLoading] = useState(false);
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const onSubmit = async (data) => {
        //upload image to imgbb and get the image url
        const imageFile = { image: data.photo[0] };
        const imageFile2 = { image: data.photo2[0] };
        const imageFile3 = { image: data.photo3[0] };
        const imageFile4 = { image: data.photo4[0] };
        const imageFile5 = { image: data.photo5[0] };

        setFormLoading(true);

        //upload image 1
        const res1 = await axios.post(image_hosting_url, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL1 = res1.data.data.display_url;


        //upload image 2
        const res2 = await axios.post(image_hosting_url, imageFile2, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL2 = res2.data.data.display_url;


        //upload image 3
        const res3 = await axios.post(image_hosting_url, imageFile3, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL3 = res3.data.data.display_url;


        //upload image 4
        const res4 = await axios.post(image_hosting_url, imageFile4, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL4 = res4.data.data.display_url;


        //upload image 5
        const res5 = await axios.post(image_hosting_url, imageFile5, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL5 = res5.data.data.display_url;

        const spotImages = [imgURL1, imgURL2, imgURL3, imgURL4, imgURL5]

        setFormLoading(false);


        const AllTourPlan = [
            { title: data.title, description: data.description },
            { title: data?.title2, description: data?.description2 },
            { title: data?.title3, description: data?.description3 },
            { title: data?.title4, description: data?.description4 },
            { title: data?.title5, description: data?.description5 },
        ]

        const tourPlan = AllTourPlan.filter(plan => plan.title.trim() && plan.description.trim());


        const packageInfo = {
            spotImages,
            tourType: data.tourType,
            tripTitle: data.tripTitle,
            price: parseInt(data.price),
            Description: data.Description,
            tourPlan
        }

        const packageRes = await axiosSecure.post('/packages', packageInfo);

        if (packageRes.data.insertedId) {
            toast.success('Post Successful');
            reset();
        }
    }

    return (
        <div>
            <SectionTitle
                heading={'Package Entry'}
                subHeading={'Add new packages to your website using this form below'}
            ></SectionTitle>
            <ToastContainer></ToastContainer>

            <div>
                <p className="text-center font-medium text-ttPrimary">Info: You must fill up the fields that has <span className="text-red-600 font-black">*</span> in it. Otherwise you can not submit the form</p>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* trip title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Trip title<span className="text-red-600 text-lg">*</span> </span>
                        </label>
                        <input  {...register("tripTitle", { required: true })} type="text" placeholder="Enter the package title" className="input input-bordered" />
                    </div>


                    {/* tour type and price */}
                    <div className="flex md:flex-row flex-col justify-between gap-4">
                        {/* Tour Type */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Tour Type <span className="text-red-600 text-lg">*</span></span>
                            </label>
                            <input  {...register("tourType", { required: true })} type="text" placeholder="Enter the tour type" className="input input-bordered" />
                        </div>


                        {/* price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input  {...register("price", { required: true })} type="number" placeholder="Enter the package price" className="input input-bordered" />
                        </div>
                    </div>


                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description<span className="text-red-600 text-lg">*</span></span>
                        </label>
                        <textarea {...register("Description", { required: true })} type="text" placeholder="Enter Tour description" className="textarea textarea-bordered" />
                    </div>


                    {/*======= tour plans =======  */}


                    {/* Day 1 plan */}
                    <div className="flex flex-col md:flex-row gap-4 justify-between">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 1 title<span className="text-red-600 text-lg">*</span></span>
                            </label>
                            <input {...register("title", { required: true })} type="text" placeholder="Enter title for day 1" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 1 description<span className="text-red-600 text-lg">*</span></span>
                            </label>
                            <textarea {...register("description", { required: true })} type="text" placeholder="Enter day 1 description" className="textarea textarea-bordered" />
                        </div>
                    </div>


                    {/* Day 2 plan */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 2 title</span>
                            </label>
                            <input {...register("title2")} type="text" placeholder="Enter title for day 2" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 2 description</span>
                            </label>
                            <textarea {...register("description2")} type="text" placeholder="Enter day 2 description" className="textarea textarea-bordered" />
                        </div>
                    </div>


                    {/* Day 3 plan */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 3 title</span>
                            </label>
                            <input {...register("title3")} type="text" placeholder="Enter title for day 3" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 3 description</span>
                            </label>
                            <textarea {...register("description3")} type="text" placeholder="Enter day 3 description" className="textarea textarea-bordered" />
                        </div>
                    </div>


                    {/* Day 4 plan */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 4 title</span>
                            </label>
                            <input {...register("title4")} type="text" placeholder="Enter title for day 4" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 4 description</span>
                            </label>
                            <textarea {...register("description4")} type="text" placeholder="Enter day 4 description" className="textarea textarea-bordered" />
                        </div>
                    </div>


                    {/* Day 5 plan */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 5 title</span>
                            </label>
                            <input {...register("title5")} type="text" placeholder="Enter title for day 5" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Day 5 description</span>
                            </label>
                            <textarea {...register("description5")} type="text" placeholder="Enter day 5 description" className="textarea textarea-bordered" />
                        </div>
                    </div>



                    {/* ===== spot photos ====== */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Add a pictures related to the package<span className="text-red-600 text-lg">*</span></span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                            <input {...register("photo2", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                            <input {...register("photo3", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                            <input {...register("photo4", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                            <input {...register("photo5", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                        </div>
                    </label>

                    <div className="form-control mt-6">
                        {
                            formLoading ?
                                <button disabled={loading} className="btn bg-ttPrimary text-white"><ImSpinner9 className="animate-spin" /></button>
                                :
                                <button className="btn bg-ttPrimary text-white hover:bg-ttSecondary">Add Package</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;