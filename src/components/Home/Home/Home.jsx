import PopularActivites from "../PopularActivities/PopularActivites";

const Home = () => {
  console.log("this is form home");
  return (
    <>
      <section className="bg-white w-10/12">
        <section className="w-8/12 h-auto bg-[#f6f7fb] m-4 rounded-md">
          <PopularActivites />
        </section>
        <section className="w-2/12 bg-[#f6f7fb m-4 rounded-md"></section>
      </section>
    </>
  );
};

export default Home;
