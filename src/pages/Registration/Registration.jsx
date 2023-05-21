import { useContext, useState } from "react";
import SocialLogin from "../Shared/SocilalLogin/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Registration = () => {
  const {  createUser, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  useTitle('tegistration')

  const handleRegistration = () => {
    event.preventDefault();

    setError("");
    setSuccess("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
  

    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    if ((email, password, photo, name)) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          setSuccess("Sing up successfull");
          profileUpdate(name, photo)
            .then(() => {})
            .catch((error) => setError(error.message));
        })
        .catch((error) => setError(error.message));
    }
  };
  return (
    <div>
      <div className=" font-serif my-10">
        <div className="hero min-h-screen w-4/5 mx-auto">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <img
                src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1684433865~exp=1684434465~hmac=2053a482945b12f9897292907dc100757cf6a036ee1ef6fb52573d2e5fdce119"
                alt=""
                className="mx-4 "
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-semibold py-4">SingUp</h1>
                <p className="text-red-700">{error}</p>
                <p className="text-green-700">{success}</p>
                <form onSubmit={handleRegistration}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo URL</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                    <p> Already Have an Account? <Link to="/login" className='text-blue-700 underline'>Login</Link></p>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value=" SingUp "
                    />
                  </div>
                </form>
              </div>
              <div className="relative my-2 h-10">
                <h1 className="text-center rounded-full  absolute left-1/2 -top-1/2 mx-auto p-2 text-white  bg-blue-700 w-10">
                  OR
                </h1>
                <hr className=" border-2  mx-auto  border-blue-700" />
              </div>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
