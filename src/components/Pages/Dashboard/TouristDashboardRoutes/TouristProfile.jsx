import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Utility/SectionTitle";
import LoadingSpinner from "../../../Utility/LoadingSpinner";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;

const TouristProfile = () => {
    const { user, loading } = useAuth();
    const [ formLoading, setFormLoading ] = useState(false);

    const { register, handleSubmit, reset } = useForm();

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    const onSubmit = async (data) => {
        //upload image to imgbb and get the image url
        const imageFile = { image: data.photo[0] };
        setFormLoading(true);
        const res = await axios.post(image_hosting_url, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL = res.data.data.display_url;
        setFormLoading(false);

        const storyInfo = {
            name: user?.displayName,
            imageURL: user?.photoURL,
            email: user?.email,
            storyTitle: data.storyTitle,
            storyDetails: data.storyDetails,
            tourType: data.tourType,
            spotImage: imgURL
        }

        console.log(storyInfo);
    }


    return (
        <div>
            <h2 className="text-4xl text-ttPrimary font-medium italic">Welcome! <span className="font-bold">{user?.displayName}</span>, This is your dashboard</h2>

            <SectionTitle heading={'Your Info'} subHeading={'Here is the detailed information of you'}></SectionTitle>


            {/* user details */}
            <div className="mx-auto text-center">
                <div className="w-28 h-28 rounded-full shadow-2xl mx-auto mb-6">
                    <img className="rounded-full w-28 h-28" src={user?.photoURL} alt="user image" />
                </div>
                <h2 className="font-medium text-xl capitalize mb-2">Name: {user?.displayName}</h2>
                <h4 className="text-lg font-medium mb-2">Email: {user?.email}</h4>

                <h5 className="text-lg text-ttTerTiary font-medium mb-2">User Since: {user?.metadata.creationTime}</h5>

                <h5 className="text-lg text-ttTerTiary font-medium">Last login: {user?.metadata.lastSignInTime}</h5>
            </div>


            {/* story form */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                    {/* story title */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Story title</span>
                        </label>
                        <input  {...register("storyTitle", { required: true })} type="text" placeholder="Enter the story title" className="input input-bordered" />
                    </div>


                    {/* story details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Story details</span>
                        </label>
                        <textarea {...register("storyDetails", { required: true })} type="text" placeholder="Write tour story" className="textarea textarea-bordered" />
                    </div>

                    {/* tour type */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tour type</span>
                        </label>
                        <input {...register("tourType", { required: true })} type="text" placeholder="Enter tour type" className="input input-bordered" />
                    </div>

                    {/* spot photo  */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Add a picture from your trip</span>
                        </div>
                        <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                    </label>

                    <div className="form-control mt-6">
                        {
                            formLoading ?
                                <button disabled={loading} className="btn bg-ttPrimary text-white"><ImSpinner9 className="animate-spin" /></button>
                                :
                                <button className="btn bg-ttPrimary text-white hover:bg-ttSecondary">Login</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TouristProfile;