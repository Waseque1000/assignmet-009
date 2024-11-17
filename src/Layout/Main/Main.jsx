import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="px-6">
      <Navbar />
      <Outlet className="mt-10 px-3"></Outlet>
    </div>
  );
};

export default Main;
