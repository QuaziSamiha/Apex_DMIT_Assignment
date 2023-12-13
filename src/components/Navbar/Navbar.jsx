import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCalendarCheck, FaRunning, FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#493971] h-screen w-2/12 text-white text-center px-auto">
        <h1 className="mt-12">Logo Area</h1>
        <div className="flex flex-col items-center mt-6">
          <div className="">
            <div>
              <Link>
                <div className="flex items-center justify-start my-4">
                  <IoMdHome />
                  <h1 className="px-3">Home</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/profile">
                <div className="flex items-center justify-start my-4">
                  <FaUser />
                  <h1 className="px-3">Profile</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/profile">
                <div className="flex items-center justify-start my-4">
                  <FaCalendarCheck />
                  <h1 className="px-3">Schedule</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/profile">
                <div className="flex items-center justify-start my-4">
                  <FaRunning />
                  <h1 className="px-3">Activities</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/profile">
                <div className="flex items-center justify-start my-4">
                  <IoMdSettings />
                  <h1 className="px-3">Settings</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
