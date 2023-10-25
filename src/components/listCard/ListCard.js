import "./style.css";
import Card from "../card/Card";
import { useSelector } from "react-redux/es/hooks/useSelector";




const ListCard = () => {
  const citys = useSelector(state =>state.citys.citys
  );

  return (

    <div className="content">
      {citys.slice(0)
  .reverse().map((city) => {
        return <Card key={city.id} id={city.id} city={city.text} styleCard="card"/>;
      })}
    </div>
  );
};
export default ListCard;
