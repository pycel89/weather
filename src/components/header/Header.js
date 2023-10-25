import "./style.css"
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/citySlice';

import React, {useState } from 'react';
import { getCity } from './../../http/Api'


const Header = () => {

  const dispatch = useDispatch();

  const [typingCity, setCity] = useState("");
  const [findCity, setFindCity] = useState([]);

  const handleAction = (text) => {
    if(text.trim().length) {
      const cityName=text.substring(2,text.indexOf(","))
      dispatch(addCity(cityName));      
    }
    setFindCity([])
  }

  const clickEnter = async () => {
    const city = await getCity(typingCity);
    setCity("");
    setFindCity(city)
  }

  const returnFindCity =(city,i)=>
  {
    if(!city)
      return
    return(<button key={i} onClick={e =>{handleAction(e.target.textContent)
      }}>+ {city.name}, {city.country}</button>
    )
  }


  return (<div className="header" /*onClick={e => e.stopPropagation()}*/>
    <h1>Прогноз погоды</h1>
    <div className="form">
      <input placeholder="Введите название населенного пункта"
        value={typingCity}
        onChange={e =>
          setCity(e.target.value)
        }
        onKeyDown={e => {
          if (e.keyCode === 13)
            clickEnter()
          }
        }
      ></input>
      <button onClick={clickEnter}>Искать</button>
    </div>
    <div>
    {findCity.map((e,i)=>returnFindCity(e,i))}
    </div>
  </div>)
}
export default Header;