import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="bg-[#493971] h-screen w-2/12">
        <h1>Logo Area</h1>
        <div>
          <div>
            <Link>
              <div>
                <h1>Home</h1>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <div>
                <h1>Profile</h1>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
