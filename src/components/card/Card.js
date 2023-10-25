import "./style.css";
import closeImg from "../../ico/close.png";
import React, { useEffect, useState } from "react";
import { getCityWeatherInfo, } from "./../../http/Api";
import { useDispatch } from "react-redux";
import { removeCity, addMainCity } from "../../store/citySlice";
import { kmhToMs, ruWind, fullTime} from "../../lib/Function";

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
  )
  const getWeatherInfo = () => {
    getCityWeatherInfo(city).then((data) => {
      if (data)        
        setWeatherInfo(data);
    });
  }

  const dayLength = () => {
    if (styleCard === "cardOne") {
      if (!weatherInfo)
        return <div></div>;
      return (<div>
          <h4>Восход: {fullTime(weatherInfo.astro.sunrise)}</h4>
          <h4>Закат: {fullTime(weatherInfo.astro.sunset)}</h4>
      </div>)
    }
  }
  const mainWeatherInfo = () => {
    let classDay = "cardNight";
    if (!weatherInfo) return <div></div>;
    if (weatherInfo.current.is_day) classDay = "cardDay";
    return (
      <div className={classDay} onClick={(e) => {
        if (styleCard !== "cardOne")
          dispatch(addMainCity({ city }))
      }}>
        <h2>
          {city} {weatherInfo.current.last_updated.substring(10)}
        </h2>
        <p>Температура: {Math.round(weatherInfo.current.temp_c)}°</p>
        <p>Ощущается как: {Math.round(weatherInfo.current.feelslike_c)}°</p>
        <p>
          Ветер: {ruWind(weatherInfo.current.wind_dir)}{" "}
          {kmhToMs(weatherInfo.current.wind_kph)} м/с
        </p>
        <p>Влажность: {weatherInfo.current.humidity} %</p>
        <div className="block">
          <h4>{weatherInfo.current.condition.text}</h4>
          {dayLength()}
          <img height="96px" src={weatherInfo.current.condition.icon}></img>
        </div>
      </div>
    );
  }

  useEffect(getWeatherInfo, [])
  return (
    <div className={styleCard} >
      {mainWeatherInfo()}
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
