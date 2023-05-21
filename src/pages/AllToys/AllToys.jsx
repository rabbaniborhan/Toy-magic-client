import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState();
  const[searchText,setSearchText]=useState("")
  useTitle('Alltoys')
 

  useEffect(() => {
    fetch(`https://toys-maker-server.vercel.app/alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);


  const handleSearch =()=>{

    fetch(`https://toys-maker-server.vercel.app/toysSearchBytitle/${searchText}`)
    .then((res)=>res.json())
    .then((data)=>{
        setToys(data);
    })

  }

 

  return (
    <div className=" py-14 bg-slate-200">
      <div className="w-4/5 mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center  text-blue-600">
            All Toys
          </h1>
          <div className="mx-auto w-72 ">
            <input
            onChange={(e)=>setSearchText(e.target.value)}
              type="text"
              name=""
              id=""
              className="border border-black rounded-full p-2"
              placeholder="Search"
            />
            <input
            onClick={handleSearch}
              type="submit"
              value="Search"
              className="p-2 text-white bg-blue-600 rounded-lg my-4 mx-2"
            />
          </div>
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
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {toys?.map((toy, index) => (
                  <tr key={index} className={index %2==0 ?"active":""}>
                    <th>{index + 1}</th>
                    <th>{toy.toyname}</th>
                    <th>{toy.sallerName}</th>    
                    <th>${toy.price}</th>
                    <th>{toy.quantity}</th>
                    <th>{toy.category}</th>
                    <th> <Link to={`/toy/${toy._id}`}> <button className="btn btn-primary"> Details</button></Link></th>
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

export default AllToys;
