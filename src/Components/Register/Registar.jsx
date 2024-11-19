// import React, { useContext } from "react";
// import { AuthContext } from "../../Provider/Authproviders";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaGoogle } from "react-icons/fa";

// const Registar = () => {
//   const { register, user, setUser, updateUserProfile } =
//     useContext(AuthContext);
//   const navigate = useNavigate();
//   console.log(register);
//   const handlelogin = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     const name = form.name.value;
//     const photo = form.photo.value;
//     register(email, password)
//       .then((result) => {
//         const user = result.user;
//         setUser(user);
//         console.log(user);
//         toast("Registration Success", {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//         updateUserProfile({ displayName: name, photoURL: photo })
//           .then(() => {
//             navigate("/");
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//         form.reset();
//       })
//       .catch((err) => {
//         console.log(err.message);
//         alert("Registration Failed");
//         toast(err.message, {
//           position: "top-right",
//           autoClose: 2000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       });
//     console.log(email, password);
//   };
//   return (
//     <div>
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Register now!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//           </div>
//           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//             {/* FIXME: */}
//             <form onSubmit={handlelogin} className="card-body">
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Name</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="name"
//                   name="name"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo url</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="photo"
//                   name="photo"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="email"
//                   name="email"
//                   className="input input-bordered"
//                   required
//                 />
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="password"
//                   name="password"
//                   className="input input-bordered"
//                   required
//                 />
//                 <label className="label">
//                   <Link
//                     to="/login"
//                     className="label-text-alt link link-hover text-red-500"
//                   >
//                     Already have an account
//                   </Link>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">Login</button>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">
//                   {" "}
//                   <FaGoogle></FaGoogle>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registar;

import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Authproviders";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../assets/goglee.jpeg";
import { FacebookIcon, Github } from "lucide-react";
import { BsGoogle } from "react-icons/bs";

const Registar = () => {
  const { register, user, setUser, updateUserProfile, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // google
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;

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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-red-500"
                >
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <div className="flex flex-row  text-center justify-evenly form-control mt-6">
              <button
                onClick={handleGoogle}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-800 hover:text-green-600"
              >
                <BsGoogle size={24} />
              </button>
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-800 ml-4 hover:text-green-600"
              >
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
