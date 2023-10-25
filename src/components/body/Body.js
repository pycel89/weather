import "./style.css";
import Card from "../card/Card";
import ListCard from "../listCard/ListCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Body = () => {
  const mainCity = useSelector((state) => state.citys.mainCity);
  return (
    <div className="body">
      <div className="content">
        {mainCity.map((city) => {
          return (
            <Card
              key={city.id}
              id={city.id}
              city={city.text}
              styleCard="cardOne"
            />
          );
        })}
      </div>
      <ListCard />
    </div>
  );
};
export default Body;
