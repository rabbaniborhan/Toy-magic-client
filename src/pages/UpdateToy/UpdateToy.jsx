import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const UpdateToy = () => {
    const { id } = useParams();
    const {user}=useContext(AuthContext)

    const [toy, setToy] = useState([]);

    const {
        register,
        handleSubmit,
        // eslint-disable-next-line no-unused-vars
        watch,
        // eslint-disable-next-line no-unused-vars
        formState: { errors },
      } = useForm();


      const onSubmit = (data) => {
        console.log(data);
       
        
          // eslint-disable-next-line no-undef
        //   form.reset();
    
      };
  
    useEffect(() => {
      fetch(`http://localhost:5000/toy/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setToy(data);
        });
    }, []);


    return (
        <div className="w-4/5 mx-auto my-20">
            <h1 className="pt-6 pb-14 text-3xl font-sans font-bold text-blue-700 text-center">Update Toy</h1>
           <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto shadow-md shadow-blue-500 p-4 border-blue-600 border-2 rounded-lg">
          <div className="flex  items-center gap-4">
            <div className="mx-2">
              <label className="font-semibold font-sans text-blue-600 text-xl">Toy Name:</label>
              <input
                type="text"
                {...register("toyname", { maxLength: 20 })}
                className="border  p-2 rounded-lg border-black"
                placeholder="Toy name"
                defaultValue={toy.toyname}
              />
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Saller Name:</label>
              <input
                type="text"
                {...register("sallerName", {  maxLength: 20 })}
                className="border  p-2 rounded-lg border-black"
                placeholder="Saller name"
                defaultValue={toy.sallerName}
              />
            </div>
          </div>
          <div className="flex  items-center gap-4 my-4">
            <div className="mx-2">
              <label className="font-semibold font-sans text-blue-600 text-xl">Photo:</label>
              <input
                type="text"
                {...register("photo", )}
                className="border  p-2 rounded-lg border-black"
                placeholder="Toy photo"
                defaultValue={toy.photo}
              />
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Saller email:</label>
              <input
                type="email"
                {...register("salleEmail", )}
                className="border  p-2 rounded-lg border-black"
                placeholder="Saller email"
                value={user?.email}
              />
            </div>
          </div>
          <div className="flex  items-center gap-4 my-4">
            <div className="mx-2">
              <label className="font-semibold font-sans text-blue-600 text-xl">Price:</label>
              <input
                type="number"
                {...register("price", )}
                className="border  p-2 rounded-lg border-black"
                placeholder="price"
                defaultValue={toy.price}
              />
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Rating:</label>
              <input
                type="number"
                {...register("rating", )}
                className="border  p-2 rounded-lg border-black"
                placeholder="rating"
                defaultValue={toy.rating}
              />
            </div>
          </div>
          <div className="flex  items-center gap-4 my-4">
            <div className="mx-2 w-1/2">
              <label className="font-semibold font-sans text-blue-600 text-xl">Category:</label>
              <select
                className=" border w-full  p-2 rounded-lg border-black"
                {...register("category")}
              >
                <option value="Sports Car">sports Car</option>
                <option value="Truck">Truck</option>
                <option value="Regular Car">Regular Car</option>
                <option value=" Mini Police Car"> Mini Police Car</option>
              </select>
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Quantity:</label>
              <input
                type="number"
                {...register("quantity", )}
                className="border  p-2 rounded-lg border-black"
                placeholder="Quantity"
                defaultValue={toy.quantity}
              />
            </div>
          </div>
          <div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Details:</label>
              <input
                type="text"
                {...register("details",)}
                className="border w-full h-20  p-2 rounded-lg border-black"
                placeholder="details"
                defaultValue={toy.details}
              />
            </div>
          </div>
          <div className="w-24  my-6 mx-auto">
            <input type="submit" value='submit' className="btn btn-primary my-2" />
          </div>
        </form>
        </div>
    );
};

export default UpdateToy;