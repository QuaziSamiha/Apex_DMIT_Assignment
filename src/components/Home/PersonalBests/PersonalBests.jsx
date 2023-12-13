const PersonalBests = () => {
  return (
    <>
      <section className="h-full m-3">
        <h1 className="text-sm font-semibold">Personal Bests</h1>
        <div className="h-full">
          <div className="bg-[#d1c2f2] h-28 mt-1 rounded-lg flex justify-center items-center">
            {/* <div> */}
            <h1>Fastest 5k Run: 22min</h1>
            <img src="" alt="" />
            {/* </div> */}
          </div>
          <div className="flex h-28 mt-2 text-xs">
            <div className="bg-[#f1d1a8] w-1/2 rounded-lg p-2 mr-1">
              <p>Longest Distance Cycling : 4 miles</p>
              <img src="" alt="" />
            </div>
            <div className="bg-[#d0e9d7] w-1/2 rounded-lg p-2 ml-1">
              <p>Longest Roller-Skating: 2 hours</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalBests;
