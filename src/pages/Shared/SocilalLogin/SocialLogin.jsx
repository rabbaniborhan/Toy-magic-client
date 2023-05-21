import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';


  const handleGoogleLogin = () => {
    googleLogin()
    // eslint-disable-next-line no-unused-vars
    .then(result=>{
      navigate(from, { replace: true })
      Swal.fire(
        'Good job!',
        'LogIn Successfull!',
        'success'
      )
    })
    .catch(error=>console.log(error)
    )
  };

  return (
    <div className="w-4/5 mx-auto mb-4">
      <div
        className="flex flex-row md:flex-col h-20 md:h-0 btn btn-block btn-primary gap-4"
        onClick={handleGoogleLogin}
      >
        <img
          src="https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
          alt=""
          className="w-8 h-8  rounded-full"
        />
        <h1 className="">Continue with Google</h1>
      </div>
    </div>
  );
};

export default SocialLogin;
