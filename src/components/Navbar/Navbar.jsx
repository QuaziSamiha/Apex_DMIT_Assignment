import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCalendarCheck, FaRunning, FaUser } from "react-icons/fa";
import { IoMdSettings, IoLogoBuffer } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#493971] min-h-screen w-2/12 text-white px-auto">
        <h1 className="px-3 hidden md:block mt-8 lg:text-center">Logo Area</h1>
        <div className="flex flex-col items-center mt-6">
          <IoLogoBuffer className="block md:hidden" />
          <div className="">
            <div>
              <Link to="/">
                <div className="flex items-center justify-start my-4">
                  <IoMdHome />
                  <h1 className="px-3 hidden md:block">Home</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/profile">
                <div className="flex items-center justify-start my-4">
                  <FaUser />
                  <h1 className="px-3 hidden md:block">Profile</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/schedule">
                <div className="flex items-center justify-start my-4">
                  <FaCalendarCheck />
                  <h1 className="px-3 hidden md:block">Schedule</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/activities">
                <div className="flex items-center justify-start my-4">
                  <FaRunning />
                  <h1 className="px-3 hidden md:block">Activities</h1>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/settings">
                <div className="flex items-center justify-start my-4">
                  <IoMdSettings />
                  <h1 className="px-3 hidden md:block">Settings</h1>
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
