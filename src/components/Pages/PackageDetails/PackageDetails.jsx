import { useLoaderData } from "react-router-dom";
import PackageImageGallery from "../../Utility/PackageImageGallery";
import CheckMarkIcon from "../../Utility/CheckMarkIcon";
import { useState } from "react";
import DaisyLoadingSpinner from "../../Utility/DaisyLoadingSpinner";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useTourGuides from "../../Hooks/useTourGuides";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaCircleInfo, FaEye } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import PackageDetailsGuideLists from "./PackageDetailsGuideLists";


const PackageDetails = () => {
    const { user, loading } = useAuth();
    const singlePackageInfo = useLoaderData();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { register, handleSubmit, reset } = useForm();
    const [tourGuides,] = useTourGuides();
    const axiosSecure = useAxiosSecure();

    if (loading) return <DaisyLoadingSpinner></DaisyLoadingSpinner>

    const { spotImages, tourType, tripTitle, price, Description, tourPlan } = singlePackageInfo;


    const onSubmit = async (data) => {
        const bookingInfo = {
            name: user?.displayName,
            email: user?.email,
            imageURL: user?.photoURL,
            price: parseInt(data.price),
            date: (selectedDate.toString()),
            selectedTourGuide: data.selectedTourGuide,
            tripTitle, tourType,
            status: "In Review"
        }

        const bookingResult = await axiosSecure.post('/booking', bookingInfo);

        if (bookingResult.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Confirm your Booking",
                showConfirmButton: false,
                html: `<a href="/dashboard/myBookings">Go to <b>My Bookings</b> page</a>`
            });
            reset();
        }
    }

    return (
        <div className="pt-10 pb-10 mx-1 md:mx-2 lg:mx-0 bg-ttPrimaryBg ">
            <h2 className="text-center font-black text-2xl md:text-4xl lg:text-5xl font-playfairDisplay tracking-wider text-ttPrimary underline capitalize mb-8">{tripTitle}</h2>

            {/* gallery */}
            <div>
                <PackageImageGallery spotImages={spotImages}></PackageImageGallery>
            </div>

            {/* details */}
            <div className="mt-10 mb-16">
                <p className="text-lg font-medium text-ttPrimary"><span className="font-bold underline capitalize text-xl"><FaCircleInfo className="inline mr-1 text-ttSecondary" />About this trip:</span> {Description}</p>

                <h4 className="mt-3 text-lg font-medium text-ttPrimary capitalize"><span className="font-bold underline capitalize text-xl"><FaEye className="inline mr-1 text-ttSecondary" />Tour type:</span> {tourType}</h4>

                <h4 className="mt-3 text-lg font-medium capitalize text-ttPrimary"><span className="font-bold underline text-xl"><IoIosPricetags className="inline mr-1 text-ttSecondary" />Price:</span> {price}/- BDT</h4>
            </div>



            <div className="grid md:gap-5 lg:grid-cols-2 items-center overflow-hidden">
                {/* tour plan */}
                <div className="z-30 w-full lg:order-2 lg:mt-0">
                    <h2 className="text-center text-3xl font-bold underline uppercase mb-5">Tour Plan</h2>
                    <ul className="timeline timeline-vertical">
                        {
                            tourPlan?.map((day, idx) => <li className="group -ml-44 md:-ml-72 lg:-ml-80 overflow-hidden" key={idx}>
                                <div className="timeline-start border p-3 rounded-xl  bg-ttPrimary text-ttSecondary font-bold group-hover:bg-ttSecondary group-hover:text-ttPrimary transition">Day {idx + 1}</div>
                                <div className="timeline-middle">
                                    <CheckMarkIcon></CheckMarkIcon>
                                </div>
                                <div className="timeline-end timeline-box group-hover:border-ttSecondary transition">
                                    <h2 className="text-sm md:text-base font-medium md:font-bold text-ttPrimary">{day.title}</h2>
                                    <p className="text-ttTerTiary text-sm md:text-base md:font-medium">{day.description}</p>
                                </div>
                                <hr />
                            </li>)
                        }
                    </ul>
                </div>

                {/* guides list */}
                <div className="z-50 w-11/12 mx-auto lg:w-full lg:order-1">
                    <h2 className='text-lg md:text-2xl font-bold mb-5'>Explore the tour guides profiles and select a guide for your trip</h2>

                    <PackageDetailsGuideLists></PackageDetailsGuideLists>
                </div>

            </div>

            {/* booking form */}
            <div className="w-full">
                <h2 className="text-center font-bold text-2xl my-5 text-ttPrimary">Booking</h2>
                <p className="text-center font-medium text-lg text-ttTerTiary mb-5">Fill up the form to book a package</p>


                {/* form start */}
                <div className="w-11/12 mx-auto">
                    <div className="card shrink-0 w-full mx-auto shadow-ttTerTiary border border-ttTerTiary border-opacity-25">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-5">
                                {/* name */}
                                <div className="form-control md:w-2/5">
                                    <label className="label">
                                        <span className="label-text">Name<span className="text-red-500">*</span></span>
                                    </label>
                                    <input defaultValue={user?.displayName} readOnly type="text" placeholder="Enter your name" className="input input-bordered" />
                                </div>

                                {/* email */}
                                <div className="form-control md:w-2/5">
                                    <label className="label">
                                        <span className="label-text">Email<span className="text-red-500">*</span></span>
                                    </label>
                                    <input defaultValue={user?.email} readOnly type="email" placeholder="Enter your email address" className="input input-bordered" />
                                </div>

                                {/* image */}
                                <div className="form-control md:w-1/5">
                                    <h2>Preview</h2>
                                    <img src={user?.photoURL} className="w-16 h-16" alt="" />
                                </div>
                            </div>



                            <div className="flex flex-col md:flex-row gap-5">
                                {/* price */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Price<span className="text-red-500">*</span></span>
                                    </label>
                                    <input defaultValue={price} readOnly {...register("price", { required: true })} type="number" className="input input-bordered" />
                                </div>


                                {/* date */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Select a date<span className="text-red-500">*</span></span>
                                    </label>
                                    <ReactDatePicker
                                        toggleCalendarOnIconClick
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        className='w-full input input-bordered'
                                    />
                                </div>
                            </div>


                            {/* select tour guide */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Select a Tour Guide</span>
                                </div>
                                <select defaultValue='' {...register("selectedTourGuide", { required: true })} className="select select-bordered">
                                    <option value="" disabled>Select a Tour Guide</option>
                                    {
                                        tourGuides.map(tourGuide => <option key={tourGuide._id}>{tourGuide.name}</option>)
                                    }
                                </select>
                            </label>


                            {/* button */}
                            <div className="form-control mt-6">
                                {
                                    user ? <button disabled={loading} className="btn bg-ttPrimary text-white hover:bg-ttSecondary">
                                        {
                                            loading ? <ImSpinner9 className="animate-spin" />
                                                :
                                                'Book Now'
                                        }
                                    </button>
                                        :
                                        <button disabled className="btn bg-ttPrimary text-white hover:bg-ttSecondary">
                                            Pleas login to book this package
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

export default PackageDetails;