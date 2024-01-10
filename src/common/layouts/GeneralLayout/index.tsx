import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GeneralLayout = () => {
  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default GeneralLayout;
