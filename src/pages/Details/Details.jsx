import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [toy, setToy] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
      });
  }, []);

  const {
    photo,
    category,
    details,
    price,
    rating,
    salleEmail,
    sallerName,
    toyname,
  } = toy;

  console.log(toy);

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="card card-side">
        <div className="w-1/2  p-8">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <div>
            <div className="flex justify-between">
                <p className="text-lg font-bold font-sans">Name : {toyname}</p>
                <p className="text-blue-600 text-lg font-semibold">Price : ${price}</p>
            </div>
            <div className="">
                <p className=" font-semibold font-sans"> Saller Name : {sallerName}</p>
                
            </div>
          </div>

          <div className="card-actions justify-end items-end">
            <button className="btn btn-primary">
              <Link to="/alltoys">back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
