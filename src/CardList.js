import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  return robots.map((user, index) => {
    return (
      <Card key={index} id={user.id} name={user.name} email={user.email} />
    );
  });
};

export default CardList;
