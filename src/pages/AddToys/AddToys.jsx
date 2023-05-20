import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Provider/AuthProvider";

const AddToys = () => {


    const {user}=useContext(AuthContext)
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();


  const onSubmit = (data,event) => {
    fetch("http://localhost:5000/add-toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId
            ){
            Swal.fire(
                'Good job!',
                'Toy Add Complate!',
                'success'
              )
        }
        event.target.reset();
      });
      // eslint-disable-next-line no-undef
    //   form.reset();

  };

  return (
    <div className="flex w-4/5 mx-auto  my-16 items-center justify-center gap-4">
      <div className="w-1/2 border border-gray-300 rounded-lg shadow shadow-gray-300 p-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex  items-center gap-4">
            <div className="mx-2">
              <label className="font-semibold font-sans text-blue-600 text-xl">Toy Name:</label>
              <input
                type="text"
                {...register("toyname", { required: true, maxLength: 20 })}
                className="border  p-2 rounded-lg border-black"
                placeholder="Toy name"
              />
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Saller Name:</label>
              <input
                type="text"
                {...register("sallerName", { required: true, maxLength: 20 })}
                className="border  p-2 rounded-lg border-black"
                placeholder="Saller name"
              />
            </div>
          </div>
          <div className="flex  items-center gap-4 my-4">
            <div className="mx-2">
              <label className="font-semibold font-sans text-blue-600 text-xl">Photo:</label>
              <input
                type="text"
                {...register("photo", { required: true })}
                className="border  p-2 rounded-lg border-black"
                placeholder="Toy photo"
              />
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Saller email:</label>
              <input
                type="email"
                {...register("salleEmail", { required: true })}
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
                {...register("price", { required: true })}
                className="border  p-2 rounded-lg border-black"
                placeholder="price"
              />
            </div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Rating:</label>
              <input
                type="number"
                {...register("rating", { required: true })}
                className="border  p-2 rounded-lg border-black"
                placeholder="rating"
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
                {...register("quantity", { required: true })}
                className="border  p-2 rounded-lg border-black"
                placeholder="Quantity"
              />
            </div>
          </div>
          <div>
            <div className="mx-2">
              
              <label className="font-semibold font-sans text-blue-600 text-xl"> Details:</label>
              <input
                type="text"
                {...register("details", { required: true })}
                className="border w-full h-20  p-2 rounded-lg border-black"
                placeholder="details"
              />
            </div>
          </div>
          <div className="w-24  my-6 mx-auto">
            <input type="submit" className="btn btn-primary my-2" />
          </div>
        </form>
      </div>
      <div className="w-1/2">
        <img
          src="https://thumbs.dreamstime.com/b/boy-toy-cars-cartoon-illustration-happy-62798882.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AddToys;
