import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Utility/SectionTitle";
import AllUsersTableRow from "../../../Utility/AllUsersTableRow";
import axios from "axios";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    });

    const handleMakeAdmin = id => {
        console.log(id);

    }

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
                        console.log(res.data);
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

    return (
        <div>
            <SectionTitle
                heading={'All Users'}
                subHeading={'This is the list of all users you can make someone admin or tour guide from the table'}
            ></SectionTitle>


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
                            allUsers.map((singleUser, index) => <AllUsersTableRow key={singleUser._id} index={index} singleUser={singleUser} handleUpdateRole={handleUpdateRole} handleMakeAdmin={handleMakeAdmin}></AllUsersTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;