import "./style.css";
import Card from "../card/Card";
import ListCard from "../listCard/ListCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import toUp from '../../ico/up2.png'
import { useState,useEffect } from "react";

const Body = () => {
  const mainCity = useSelector((state) => state.citys.mainCity);
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const showtoUp =  () => {
    return (<img className={scroll < 300 ? "hide" : "show"}  src={toUp} onClick={handleUpButton}></img>)
  }
  const handleUpButton = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="body">
      {showtoUp()}
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
