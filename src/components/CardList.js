import Card from "./Card";
// import "./CardList.css";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error("Nooooo!");
  }
  const cardComponent = robots.map((user, index) => {
    return (
      <Card key={index} id={user.id} name={user.name} email={user.email} />
    );
  });

  return cardComponent;
};

export default CardList;

// return robots.map((user, index) => {
//     return (
//       <Card key={index} id={user.id} name={user.name} email={user.email} />
//     );
//   });
