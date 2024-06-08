import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Utility/SectionTitle";
import AllUsersTableRow from "../../../Utility/AllUsersTableRow";
import Swal from "sweetalert2";
import { useState } from "react";
import DaisyLoadingSpinner from "../../../Utility/DaisyLoadingSpinner";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [search, setSearch] = useState('');

    //get all users data
    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers', search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users?search=${search}`)
            return res.data;
        }
    });


    //make admin button
    const handleMakeAdmin = id => {
        Swal.fire({
            title: "Are your sure you want to make this user admin?",
            icon: "warning",
            background: "#061A3A",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            color: "#ffffff",
            cancelButtonColor: "green",
            confirmButtonText: "Yes, make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done!",
                                text: "The user is now an Admin.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    // handle tour guide button
    const handleUpdateRole = async (id) => {
        Swal.fire({
            title: "Make this user tour guide?",
            icon: "warning",
            background: "#061A3A",
            showCancelButton: true,
            confirmButtonColor: "green",
            color: "#ffffff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Tour Guide!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/tourGuide/${id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Done!",
                                text: "The user is now a tour guide.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    // handle search user by name
    const handleSearch = e => {
        e.preventDefault();
        const searchedText = e.target.search.value
        setSearch(searchedText);
    }

    return (
        <div>
            <SectionTitle
                heading={'All Users'}
                subHeading={'This is the list of all users you can make someone admin or tour guide from the table'}
            ></SectionTitle>

            <form className="max-w-sm mb-10 mx-auto flex gap-3" onSubmit={handleSearch}>
                <input type="text" name="search" className="input-bordered input w-full" placeholder="Search a user by name" />
                <input type="submit" value='search' className="btn bg-ttPrimary hover:bg-ttSecondary text-white" />
            </form>


            <div className="overflow-x-auto">
                <table className="table table-xs md:table-md lg:table-lg">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            isLoading
                                ?
                                <DaisyLoadingSpinner></DaisyLoadingSpinner>
                                :
                                allUsers.map((singleUser, index) => <AllUsersTableRow key={singleUser._id} index={index} singleUser={singleUser} handleUpdateRole={handleUpdateRole} handleMakeAdmin={handleMakeAdmin}
                                    isLoading={isLoading}
                                ></AllUsersTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;