// eslint-disable-next-line react/prop-types
const ScheduleCard = ({ schedule }) => {
  //   console.log(schedule);
  // eslint-disable-next-line react/prop-types
  const { date, day, name, c1, c2 } = schedule;
  //   console.log(c1, c2);
  return (
    <>
      <div
        style={{ background: `linear-gradient(to right, ${c2}, ${c1})` }}
        className="border my-1 rounded-lg h-14"
      >
        <div className="flex justify-start items-center">
          <div className="m-2 px-2 border-r-2 h-10 border-[#6d828e] w-16">
            <h1 className="">{date}</h1>
            <p>{day}</p>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p>{name}</p>
              <img src="" alt="" />
            </div>
            <div>
              <button className="bg-[#f3f5fc] text-sm rounded-2xl px-2 py-0.5 mx-3">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
