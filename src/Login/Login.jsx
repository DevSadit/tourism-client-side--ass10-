import { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/Firebgase";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const [user, setUser] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;

    // login with email and pass
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // login korar por navigate
        navigate(location?.state ? location.state : '/');
      })
      .then((error) => console.log(error.message));
  };

  // login with google
  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const googleUser = result.user;
        setUser(googleUser);

        // login korar por navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // login with fb
  const handleFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const fbUser = result.user;
        setUser(fbUser);
        console.log(result.user);

        // login korar por navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row w-full min-h-screen">
      {" "}
      <ToastContainer />
      <div className="text-left">
        <h1 className="text-5xl font-bold">Login Now!</h1>
        <p className="py-6">
          Welcome to Connect Corner, your exclusive gateway to seamless access
          and personalized experiences within our community. Log in here to
          unlock a world of convenience, where booking your perfect stay is just
          a click away. Join us now and explore your next adventure!
        </p>
      </div>
      <div className="card shrink-0 w-full max-w-sm border">
        <form onSubmit={handleLogin} className="card-body">
          <div className="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <label className="label">
              <a href="#" className="label-text-alt  text-base">
                New Here?
                <Link to="/register">
                  <span className="text-blue-600 link link-hover font-bold">
                    Register Now
                  </span>
                </Link>
              </a>
            </label>
          </div>
          <div className="text-center mt-6">
            <button className="bg-[#008DDA] text-white text-xl w-full rounded-lg py-2">
              Login
            </button>
            <p className="my-4 text-center">Login with social accounts</p>
            <div className="flex justify-center gap-x-7 ">
              <button onClick={handleGoogle}>
                <FaGoogle className="text-3xl" />
              </button>
              <button onClick={handleFacebook}>
                <FaFacebook className="text-3xl" />
              </button>
            </div>
          </div>
          <h1></h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
