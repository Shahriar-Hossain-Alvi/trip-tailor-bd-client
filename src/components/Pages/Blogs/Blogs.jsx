import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Utility/SectionTitle";
import LoadingSpinner from "../../Utility/LoadingSpinner";
import BlogsCommentsCard from "./BlogsCommentsCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";


const Blogs = () => {
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: allComments = [], isLoading } = useQuery({
        queryKey: ['allComments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/comments')
            return res.data;
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    const handleNewsLetter = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const res = await axiosPublic.post('/newsletters', email)
        if (res.data.insertedId) {
            toast.success('Subscribed successfully');
            form.reset();
        }
    }

    return (
        <div className="mx-1 md:mx-2">
            <ToastContainer></ToastContainer>
            <SectionTitle
                heading={'Welcome to our blogs page'}
                subHeading={'Read the stories and reviews from our users'}
            ></SectionTitle>

            {/* reviews */}
            <h2 className="text-xl text-center font-bold mb-5">See what others are saying about our tour guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-2 mb-10">
                {
                    allComments.map(singleComment => <BlogsCommentsCard key={singleComment._id} singleComment={singleComment}></BlogsCommentsCard>)
                }
            </div>


            {/* subscribe to our newsletter */}
            <div className="card mx-auto max-w-lg my-7">
                <h2 className="uppercase text-thin font-semibold text-center">Subscribe to our newsletter!</h2>
                <form onSubmit={handleNewsLetter} className="flex items-center w-full">
                    <input type="email" name="email" placeholder="email" className="input input-bordered rounded-r-none w-full" required />

                    <button className="btn btn-primary -ml-3 rounded-l-none">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Blogs;