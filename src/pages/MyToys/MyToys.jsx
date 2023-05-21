import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  useTitle('myToys')
  

  

  useEffect(() => {
    fetch(`https://toys-maker-server.vercel.app/mytoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [user]);



  
  const handleDelete=(id)=>{
    console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://toys-maker-server.vercel.app/toydelete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                           
                        }
                    })

            }
        })
    }
  

  return (
    <div className=" py-14 bg-slate-200">
      <div className="w-4/5 mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center  text-blue-600">
            My All Toys
          </h1>
        </div>
        <div>
          <div className="overflow-x-auto my-6">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Serial</th>
                  <th>Name</th>
                  <th>Saller</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>category</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {toys?.map((toy, index) => (
                  <tr key={index} className={index % 2 == 0 ? "active" : ""}>
                    <th className="text-center">{index + 1}</th>
                    <th>{toy.toyname}</th>
                    <th className="text-center">{toy.sallerName}</th>
                    <th className="text-center">${toy.price}</th>
                    <th className="text-center">{toy.quantity}</th>
                    <th className="text-center">{toy.category}</th>
                    <th className="text-center">
                        <Link  to={`/updatetoy/${toy._id}`} className="btn"><FaEdit></FaEdit></Link>
                     
                    </th>
                    <th className="text-center">
                      <button className=" btn" onClick={()=>handleDelete(toy._id)}>
                        <RiDeleteBin5Fill></RiDeleteBin5Fill>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
