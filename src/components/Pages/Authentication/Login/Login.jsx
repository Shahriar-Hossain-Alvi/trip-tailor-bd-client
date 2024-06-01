/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import loginBanner from "../../../../assets/images/signupBanner.jpg";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import loginAnimation from "../../../../assets/Animations/loginPageAnimation.json";
import 'animate.css';
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

    const { signInUser, loading, user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loginAnimation,
    };

    setTimeout(() => {
        document.getElementById('loginAnimation').classList.add('hidden');
        document.getElementById('hero').classList.remove('hidden')
    }, 2500);

    const onSubmit = (data) => {
        // console.log(data);
        const email = data.email;
        const password = data.password;
        if (user) {
            toast.error("Already Logged In");
            reset();
            return
        }
        else {
            // signInUser(email, password)
            //     .then(result => {

            //     })
        }
    }


    return (
        <div className="bg-ttPrimaryBg overflow-y-hidden  pb-20">
            <ToastContainer></ToastContainer>
            <div className="hero" style={{ backgroundImage: `url(${loginBanner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md py-24">
                        <h2 className="text-7xl font-bold  tracking-wider font-playfairDisplay">Login</h2>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 mb-6">
                <h2 className="text-2xl font-semibold">Login with your email or use google sign in below</h2>
            </div>

            <div id="hero" className="hero hidden animate__animated animate__fadeInUp">
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

                            {/* email */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email<span className="text-red-500">*</span></span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Enter your email address" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">required email</span>}
                            </div>


                            {/* password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password<span className="text-red-500">*</span></span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="Enter your password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">required email</span>}
                            </div>


                            {/* forgot password */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    {
                                        loading ? <ImSpinner9 className="animate-spin" />
                                            :
                                            'Login'
                                    }
                                </button>
                            </div>
                        </form>


                        {/* sign up page link */}
                        <div className="text-center mb-10">
                            <h4 className="font-medium">Don't have an account? go to <Link className="text-red-500 underline font-semibold" to='/signup'>sign up</Link> page</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div id="loginAnimation">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}>
                </Lottie>
            </div>
        </div>
    );
};

export default Login;