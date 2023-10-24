import "./style.css"
import pycel from '../../ico/pycel.png'
import github from '../../ico/github.png'
import telegram from '../../ico/telegram.png'

const Footer = () => {
    return(      
    <div className='footer'>
        <div className='block'>
        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" border="0"></img></a>
        <a href="https://github.com/pycel89/weather"><img src={github}></img></a>
        <a href="http://t.me/pycel"><img src={telegram}></img></a> 
        <a href="http://pycel.ru"><img src={pycel}></img></a> 
  </div> 
  <p>Разработчик Садыков Руслан Разимович</p>
  </div>     
    
    )
}
export default Footer;