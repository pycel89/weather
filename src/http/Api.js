import axios from 'axios';

const ApiKey =process.env.REACT_APP_API_KEY
const ApiSrc ="https://api.weatherapi.com/v1/current.json?key="
const ApiSearch = "http://api.weatherapi.com/v1/search.json?key="

export const getCity = async (city)=>
{
    const data = await axios.get(ApiSearch+ApiKey+'&q='+city)
    return data.data;
}
export const getCityWeatherInfo = async (city)=>
{
    const data = await axios.get(ApiSrc+ApiKey+'&lang=ru&q='+city)
    return data.data;
}
