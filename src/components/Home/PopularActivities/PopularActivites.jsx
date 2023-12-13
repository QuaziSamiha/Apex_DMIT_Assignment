import cicleRider from "../../../assets/images/popularActivities.jpg";
const PopularActivites = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-5 grid-rows-2 gap-4 h-72">
          <div className="m-2">
            <img src={cicleRider} alt="" />
          </div>
          <div className=" m-2 col-span-2 col-start-2 col-end-4 row-span-2 row-start-1 row-end-3">
            <img src={cicleRider} alt="" />
          </div>
          <div className="m-2">
            <img src={cicleRider} alt="" />
          </div>
          <div className="m-2">
            <img src={cicleRider} alt="" />
          </div>
          <div className="m-2">
            <img src={cicleRider} alt="" />
          </div>
          <div className="m-2 row-span-1 col-span-2 row-start-2 row-end-3 col-start-4 col-end-6 border">
            <img src={cicleRider} alt="" className="h-full w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularActivites;
