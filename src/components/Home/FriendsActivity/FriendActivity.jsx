import cicleRider from "../../../assets/images/popularActivities.jpg";
import ActivityCard from "./ActivityCard";

const FriendActivity = () => {
  const activites = [
    {
      proPic: cicleRider,
      name: "Jane",
      image: cicleRider,
      comment: "I completed the 30-Days Running Streak Challenge",
      emoji: ["🏃", "🎉"],
    },
    {
      proPic: cicleRider,
      name: "Jane",
      image: cicleRider,
      comment: "I just set a new record in cycling : 30 miles",
      emoji: ["💪"],
    },
  ];
  return (
    <>
      <section>
        {activites.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </section>
    </>
  );
};

export default FriendActivity;
