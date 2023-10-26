import axios from 'axios';

const ApiKey =process.env.REACT_APP_API_KEY
const ApiSrc ="https://api.weatherapi.com/v1/current.json?key="
const ApiSearch = "http://api.weatherapi.com/v1/search.json?key="
const ApiAstronomy = "http://api.weatherapi.com/v1/astronomy.json?key="

export const getCity = async (city)=>
{
    const nameCity = await axios.get(ApiSearch+ApiKey+'&q='+city)
    
    return nameCity.data;
}
export const getCityWeatherInfo = async (city)=>
{
    const weatherCity = await axios.get(ApiSrc+ApiKey+'&lang=ru&q='+city)
    const astronomy = await axios.get(ApiAstronomy+ApiKey+'&q='+city)
    return {current:weatherCity.data.current,
        astro:astronomy.data.astronomy.astro};
}

