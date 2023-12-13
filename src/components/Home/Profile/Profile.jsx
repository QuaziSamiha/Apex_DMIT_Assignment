import { FaBell } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
// import proPic from "../../../assets/images/popularActivites.jpg";
import cicleRider from "../../../assets/images/popularActivities.jpg";

const Profile = () => {
  return (
    <>
      <section className="">
        <div className="flex justify-evenly items-center py-3">
          <FaBell />
          <FaMessage />
          <h1>kalsey Miler</h1>
          <img className="rounded-full h-8 w-8" src={cicleRider} alt="" />
        </div>
        <div className="bg-[#d6e3f8] h-28 m-2 rounded">
          <h1 className="text-sm font-semibold mx-1 my-2.5">Active Calories</h1>
        </div>
      </section>
    </>
  );
};

export default Profile;
