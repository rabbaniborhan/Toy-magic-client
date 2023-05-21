import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Details = () => {
  const { id } = useParams();
  useTitle('details');

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
    quantity,
  } = toy;

  console.log(toy);

  return (
    <div className="w-4/5 mx-auto my-20">
      <div className="card card-side items-center">
        <div className="w-1/2  p-8">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
        </div>
        <div className="card-body w-1/2">
          <div>
            <div className="flex justify-end pb-6">
              <p className="  font-sans"> <span className="text-xl font-bold text-blue-600">Name :</span>  {toyname}</p>
              <p className="text-blue-600 text-lg font-semibold">
              <span className="text-xl font-bold text-blue-600">Price :</span>  ${price}
              </p>
            </div>
            <div className=" pb-4">
              <p className=" font-sans">
                <span className="text-lx font-bold text-blue-600">
                  {" "}
                  Description:
                </span>{" "}
                 {details}
              </p>
            </div>
            <p className=" font-sans">
                <span className="text-lx font-bold text-blue-600">
                  {" "}
                  Category :
                </span>{" "}
                {category}
              </p>
            <p className=" font-sans">
                <span className="text-lx font-bold text-blue-600">
                  {" "}
                  Saller Name :
                </span>{" "}
                 {sallerName}
              </p>
            <p className=" font-sans">
                <span className="text-lx font-bold text-blue-600">
                  {" "}
                  Saller Email :
                </span>{" "}
                 {salleEmail}
              </p>
              <div className="flex justify-between py-6">
              <p className=" font-sans">
              <span className="text-xl font-bold text-blue-600">Quantity :</span>  {quantity}
              </p>
              <p className=" text-lg flex gap-1 items-center font-semibold">
              <span className="text-xl font-bold text-blue-600">Rating :</span>  {rating}
                <FaStar></FaStar>
              </p>
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
