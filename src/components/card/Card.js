import "./style.css";
import closeImg from "../../ico/close.png";
import React, { useEffect, useState } from "react";
import { getCityWeatherInfo } from "./../../http/Api";
import { useDispatch } from "react-redux";
import { removeCity,addMainCity } from "../../store/citySlice";
import { kmhToMs,ruWind } from "../../lib/Function";

const Card = ({ id, city, styleCard }) => {
  const dispatch = useDispatch();
  const [weatherInfo, setWeatherInfo] = useState(
    "" /*{
        temp_c: 0,
        feelslike_c: 0,
        condition: {
            icon: '',
            text: ''
        },
        is_day: 1,
        wind_dir: '',
        wind_kph: 0,
        last_updated: '',
        humidity: 0

    }*/
  );

  const getInfo = () => {
    getCityWeatherInfo(city).then((data) => {
      if (data) //console.log(data);
      setWeatherInfo(data.current);
    });
  };
 /* const ruWind = (wind) => {
    let tempWind = wind;
    if (tempWind.length > 2) tempWind = tempWind.substring(1);
    tempWind = tempWind.replace("S", "Ю");
    tempWind = tempWind.replace("N", "С");
    tempWind = tempWind.replace("E", "В");
    tempWind = tempWind.replace("W", "З");
    return tempWind;
  };*/

  const isDay = () => {
    let classDay = "cardNight";
    if (!weatherInfo) return <div></div>;
    if (weatherInfo.is_day) classDay = "cardDay";
    return (
      <div className={classDay} onClick={(e) => {dispatch(addMainCity({ city }))}}>
        <h2>
          {city} {weatherInfo.last_updated.substring(10)}
        </h2>
        <p>Температура: {weatherInfo.temp_c}C</p>
        <p>Ощущается как: {weatherInfo.feelslike_c}C</p>
        <p>
          Ветер : {ruWind(weatherInfo.wind_dir)}{" "}
          {kmhToMs(weatherInfo.wind_kph)} м/с
        </p>
        <p>Влажность : {weatherInfo.humidity} %</p>
        <div className="block">
          <h3>{weatherInfo.condition.text}</h3>
          <img  height="96px" src={weatherInfo.condition.icon}></img>
        </div>
      </div>
    );
  };

  useEffect(getInfo, []);

  return (
    <div className={styleCard} >
      {isDay()}
      <div>
        <img
          height="20px"
          src={closeImg}
          onClick={(e) => {
            dispatch(removeCity({ id }));
          }}
        ></img>
        
      </div>
    </div>
  );
};
export default Card;
