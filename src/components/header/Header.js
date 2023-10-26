import "./style.css"
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/citySlice';
import add from '../../ico/add.png'
import upMenu from '../../ico/up.png'

import React, { useState } from 'react';
import { getCity } from './../../http/Api'


const Header = () => {

  const dispatch = useDispatch();

  const [typingCity, setCity] = useState("");
  const [findCity, setFindCity] = useState([]);
  const [visibleIco, setVisibleIco] = useState(0)

  const handleAction = (text) => {
    dispatch(addCity({ text: text.name, id: text.id }));
    setFindCity(findCity.filter(city=> city.id!==text.id))
    if(findCity.length===1)
      setVisibleIco(false)
  }

  const handleСlick = async () => {
    const city = await getCity(typingCity);
    setCity("");
    setFindCity(city)
    if (city.length)
      setVisibleIco(true)
  }
  const visibleUpMenu = () => {
    if (visibleIco)
      return (<img height="20px" width='50px'  src={upMenu} onClick={e => {
        setVisibleIco(false)
        setFindCity([])
      }}></img>)
  }

  const returnFindCity = (city) => {
    if (!city)
      return
    return (<div className="newCity" onClick={e => {
      handleAction(city)
    }}><img height="32px" src={add}></img><p key={city.id} >{city.name}, {city.country}</p></div>
    )
  }


  return (<div className="header">
    <h1>Прогноз погоды</h1>
    <div className="form">
      <input placeholder="Введите название населенного пункта"
        value={typingCity}
        onChange={e =>
          setCity(e.target.value)
        }
        onKeyDown={e => {
          if (e.keyCode === 13)
          handleСlick()
        }
        }
      ></input>
      <button onClick={handleСlick}>Искать</button>
    </div>
    <div className="formNewCity">
      {findCity.map((e) => returnFindCity(e))}
    </div>
    <div>
      {
        visibleUpMenu()
      }
    </div>

  </div>)
}
export default Header;