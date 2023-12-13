import { space } from "postcss/lib/list";

// eslint-disable-next-line react/prop-types
const ActivityCard = ({ activity }) => {
  console.log(activity);
  // eslint-disable-next-line react/prop-types
  const { proPic, name, image, comment, emoji } = activity;
  return (
    <>
      <div className="bg-white rounded h-44 my-2 p-2">
        <div className="flex my-1">
          <img className="rounded-full h-6 w-6" src={proPic} alt="" />
          <h1 className="px-1">{name}</h1>
        </div>
        <img className="h-28 w-full rounded-md m-1" src={image} alt="" />
        <div className="text-xs">
          <p>{comment}</p>
          <p>
            {
              // eslint-disable-next-line react/prop-types
              emoji.map((em, index) => (
                <span key={index}>{em}</span>
              ))
            }
          </p>
          {/* {
            // eslint-disable-next-line react/prop-types
            emoji.map((em, index) => (
              <EmojiPicker key={index} emoji={em} />
            ))
          } */}
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
