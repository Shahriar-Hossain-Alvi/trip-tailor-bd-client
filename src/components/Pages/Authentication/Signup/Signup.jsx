import { FcGoogle } from "react-icons/fc";
import signupBanner from "../../../../assets/images/signupBanner.jpg";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ImSpinner9 } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const image_hosting_api = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_api}`;


const Signup = () => {

    const { createUser, loading, updateUserProfile } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    // react-hook-form submit function
    const onSubmit = async (data) => {
        //get the data from the form
        const name = data.name;
        const email = data.email;
        const password = data.password;

        //upload image to imgbb and get the image url
        const imageFile = { image: data.photo[0] };
        const res = await axios.post(image_hosting_url, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        const imgURL = res.data.data.display_url;


        //if image upload is successful then create user
        if (res.data.success) {
            createUser(email, password)
                .then(result => {
                    toast.success('Profile created successfully✔');
                    //if signup is successful then update profile
                    if (result.user) {
                        updateUserProfile(name, imgURL)
                            .then(() => {
                                toast.success('Profile updated');
                            })
                            .catch(error => {
                                console.log(error);
                                toast.error(error);
                            })
                    }
                    reset();
                })
                .catch(error => {
                    console.log(error);
                    toast.error(error);
                })
        }
    }

    return (
        <div className="bg-ttPrimaryBg pb-20">
            <ToastContainer></ToastContainer>
            <div className="hero" style={{ backgroundImage: `url(${signupBanner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-24">
                        <h2 className="text-7xl font-bold  tracking-wider font-playfairDisplay">Sign Up</h2>
                    </div>
                </div>
            </div>

            <div className="text-center my-5">
                <h2 className="text-2xl font-semibold">Sign Up with your email or use google sign in below</h2>
            </div>

            <div className="hero">
                <div className="hero-content w-full flex flex-col lg:flex-row">

                    {/* google sign in */}
                    <div className="flex flex-col  items-center w-full lg:w-2/5 my-5">
                        <h3 className="text-lg font-medium text-center mb-3">Click the google icon to sign in with google</h3>
                        <button className="btn btn-circle border bg-transparent border-ttTerTiary hover:bg-transparent hover:border-ttSecondary rounded-full">
                            <FcGoogle className="w-10 h-10" />
                        </button>
                    </div>


                    {/* form start */}
                    <div className="card shrink-0 w-full lg:w-3/5 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            {/* name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name<span className="text-red-500">*</span></span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Enter your name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">required name</span>}
                            </div>


                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email<span className="text-red-500">*</span></span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Enter your email address" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">required email</span>}
                            </div>


                            {/* profile picture  */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Add your profile picture</span>
                                </div>
                                <input {...register("photo", { required: true })} type="file" className="file-input file-input-bordered w-full " />
                                {errors.photo && <span className="text-red-500">required photo</span>}

                            </label>


                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password<span className="text-red-500">*</span></span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6, maxLength: 20, pattern:
                                        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                                })} type="password" placeholder="Enter your password" className="input input-bordered" />

                                {errors.password && <span className="text-red-500">required password</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">password must have at least 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">password should not be longer than 20 character</span>}
                                {errors.password?.type === 'pattern' && <span className="text-center text-red-500">password must contain at least 1 uppercase, 1 lowercase, 1 digit</span>}
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    {
                                        loading ? <ImSpinner9 className="animate-spin" />
                                            :
                                            'Sign up'
                                    }
                                </button>
                            </div>
                        </form>


                        {/* login page link */}
                        <div className="text-center mb-10">
                            <h4 className="font-medium">Already have an account? go to <Link className="text-red-500 underline font-semibold" to='/login'>login</Link> page</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;