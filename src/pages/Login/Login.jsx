import { useContext, useState } from "react";
import SocialLogin from "../Shared/SocilalLogin/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const {login } = useContext(AuthContext);
  const [error,setError]= useState("")

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
   if(email,password){
    login(email,password)
    // eslint-disable-next-line no-unused-vars
    .then(result=>{
      navigate(from, { replace: true })
      Swal.fire(
        'Good job!',
        'LogIn Successfull!',
        'success'
      )
    })
    .catch((error) => setError(error.message));
   }
  };

  return (
    <div className=" font-serif">
      <div className="hero min-h-screen w-4/5 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1684433865~exp=1684434465~hmac=2053a482945b12f9897292907dc100757cf6a036ee1ef6fb52573d2e5fdce119"
              alt=""
              className="mx-4"
            />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-semibold py-4">Login</h1>
              <p className="text-red-700">{error}</p>
               
              <form onSubmit={handleLogin}>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                   <p>Are you new? <Link to='/registration' className='text-blue-700 underline'> register here..</Link></p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value=" Login "
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
  );
};

export default Login;
