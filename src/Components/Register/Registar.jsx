import React, { useState, useContext } from "react";
import { AuthContext } from "../../Provider/Authproviders";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BsGoogle } from "react-icons/bs";
import { Github } from "lucide-react";
import { FaEye } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Registar = () => {
  const { register, user, setUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for password error
  const [passwordError, setPasswordError] = useState("");

  // Handle Google Login
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // Handle Registration
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

    // Password validation
    const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordValidationRegex.test(password)) {
      setPasswordError(
        "Password must include at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    setPasswordError("");
    register(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast("Registration Success", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
        toast(err.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Join us today and embark on an amazing journey of learning!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-10 text-sm text-blue-600 hover:text-blue-800"
              >
                {showPassword ? (
                  <ImCross className="mt-3 text-1xl" />
                ) : (
                  <FaEye className="mt-3 text-1xl"></FaEye>
                )}
              </button>
              {passwordError && (
                <p className="text-red-600 mt-2 text-sm">{passwordError}</p>
              )}
            </div>
            <label className="label">
              <Link
                to="/login"
                className="label-text-alt link link-hover text-red-500"
              >
                Already have an account?
              </Link>
            </label>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="flex flex-row justify-evenly form-control mt-6">
              <button
                onClick={handleGoogle}
                className="text-red-800 hover:text-green-600"
              >
                <BsGoogle size={24} />
              </button>
              <button className="text-gray-800 ml-4 hover:text-green-600">
                <Github size={24} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registar;
