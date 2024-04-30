import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const { creatUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imgUrl = e.target.imgUrl.value;
    console.log(name, email, password, imgUrl);

    // pass verify
    const passPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passPattern.test(password)) {
      toast.warning(`write the password correctly!!`);
    } else {
      // sign up
      creatUser(email, password)
      .then((result) => {
        console.log(result.user);

        // login korar por navigate
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.error(error.message));
      toast.success(`User Created Succesfully!!`);
    }
  };
  return (
    <div className="hero min-h-screen ">
      <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="text-left">
          <h1 className="text-5xl font-bold">Become a member in seconds!</h1>
          <p className="py-6">
            Unlock exclusive benefits by registering now with our website. Join
            our community to access seamless booking, personalized experiences,
            and exclusive offers. Start your journey today!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm">
          <form onSubmit={handleRegister} className="card-body">
            <div className="">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                name="imgUrl"
                type="text"
                placeholder="Image url"
                className="input input-bordered w-full"
                required
              />
            </div>
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
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Your password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className="absolute top-4 right-4"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt  text-base">
                  Already Have an Account?{" "}
                  <Link to="/login">
                    <span className="text-blue-600 link link-hover font-bold">
                      Login Now
                    </span>
                  </Link>
                </a>
              </label>
            </div>
            <div className=" text-center mt-6">
              <button className=" bg-[#008DDA] text-white text-xl w-full rounded-lg py-2">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
