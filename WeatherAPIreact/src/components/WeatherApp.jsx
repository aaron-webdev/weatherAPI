import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import ClearDay from './../assets/clearDay.png';



export default function InputComponent()
{
    const [city, setCity] = useState('newYorkCity');
    const [searchedLatitude, setSearchedLatitude] = useState(40.7128);
    const [searchedLongitude, setSearchedLongitude] = useState(-74.0061);
    const [weatherInfo, setWeatherInfo] = useState(null);
    const APIurl = `https://api.open-meteo.com/v1/forecast?latitude=${searchedLatitude}&longitude=${searchedLongitude}&current=weather_code,temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    const cityCoords = {
        "newYorkCity": {cityLatitude: 40.7128, cityLongitude: -74.0061, cityName: 'New York City'},
        "boston": {cityLatitude: 42.3604, cityLongitude: -71.0580, cityName: 'Boston'},
        "detroit": {cityLatitude: 42.3297, cityLongitude: -83.0425,  cityName: 'Detroit'},
        "losAngeles": {cityLatitude: 34.0537, cityLongitude: -118.2427,  cityName: 'Los Angeles'},
        "houston": {cityLatitude: 29.7602, cityLongitude: -95.3694,  cityName: 'Houston'},
        "nashville": {cityLatitude: 36.1673, cityLongitude: -86.7784,  cityName: 'Nashville'},
        "knoxville": {cityLatitude: 35.964668, cityLongitude: -83.9264,  cityName: 'Knoxville'},
        "portland": {cityLatitude: 45.5152, cityLongitude: -122.6784,  cityName: 'Portland'},
    };
    const weatherCodes = {
        0: {skies: "Clear", image: ClearDay},
        1: {skies: "Mostly Clear", image: "imgSrc"},
        2: {skies: "Partly Cloudy", image: "imgSrc"},
        3: {skies: "Overcast", image: "imgSrc"},
        45: {skies: "Fog", image: "imgSrc"},
        48: {skies: "Depositing Fog", image: "imgSrc"},
        51: {skies: "Light Drizzle", image: "imgSrc"},
        53: {skies: "Moderate Drizzle", image: "imgSrc"},
        55: {skies: "Heavy Drizzle", image: "imgSrc"},
        56: {skies: "Light Freezing Drizzle", image: "imgSrc"},
        57: {skies: "Freezing Drizzle", image: "imgSrc"},
        61: {skies: "Light Rain", image: "imgSrc"},
        63: {skies: "Rain", image: "imgSrc"},
        65: {skies: "Heavy Rain", image: "imgSrc"},
        66: {skies: "Light Freezing Rain", image: "imgSrc"},
        67: {skies: "Freezing Rain", image: "imgSrc"},
        71: {skies: "Flurries", image: "imgSrc"},
        73: {skies: "Snow", image: "imgSrc"},
        75: {skies: "Heavy Snow", image: "imgSrc"},
        77: {skies: "Snow Grains", image: "imgSrc"},
        80: {skies: "Light Rain Showers", image: "imgSrc"},
        81: {skies: "Rain Showers", image: "imgSrc"},
        82: {skies: "Heavy Rain Showers", image: "imgSrc"},
        85: {skies: "Light Snow Showers", image: "imgSrc"},
        86: {skies: "Heavy Snow Showers", image: "imgSrc"},
        95: {skies: "Thunderstorms", image: "imgSrc"},
        96: {skies: "Storms w/ Light Hail", image: "imgSrc"},
        99: {skies: "Storms w/ Hail", image: "imgSrc"},
    }
    let currentTime = '';
    let currentWeatherCode = 0;
    let currentTemperature = 0;
    let currentRelHumidity = 0;
    let currentSurfacePressure = 0;
    let currentPrecipitation = 0;
    let currentWindDirection = '';
    let currentWindSpeed = 0;
    let currentWindGust = 0;



//Update coords if the selected city changes
useEffect(() => {
    let newLat = cityCoords[city].cityLatitude;
    let newLong = cityCoords[city].cityLongitude;
    setSearchedLatitude(newLat);
    setSearchedLongitude(newLong);
},[city])

//Get new weather data if the coords change
useEffect(() => {
//API fetch for weather data
    fetch(APIurl) 
    .then(response => {
        if(!response.ok)//handle failure
        {
            throw new Error('Network failed to repond: ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        console.log(`Temperature: ${data.current.temperature_2m}${data.current_units.temperature_2m}`);
        console.log(`Humidity: ${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`);
        console.log(`Precipitation: ${data.current.precipitation}${data.current_units.precipitation}`);
        console.log(`Wind Speed: ${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}`);
        console.log(`Time: ${data.current.time}`);
        setWeatherInfo(data);

    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
}, [searchedLatitude, searchedLongitude]);

function showWeatherData(weatherInfo)
{
    if (weatherInfo)
    {
    currentTime = weatherInfo.current.time;
    currentWeatherCode = weatherInfo.current.weather_code;
    currentTemperature = weatherInfo.current.temperature_2m;
    currentRelHumidity = weatherInfo.current.relative_humidity_2m;
    currentSurfacePressure = weatherInfo.current.surface_pressure;
    currentPrecipitation = weatherInfo.current.precipitation;
    currentWindDirection = weatherInfo.current.wind_direction_10m;
    currentWindSpeed = weatherInfo.current.wind_speed_10m;
    currentWindGust = weatherInfo.current.wind_gusts_10m;
    }
    else
    {
        return
    }

}


return(
    <>
        <Button onClick={showWeatherData(weatherInfo)}>Get Weather Report</Button>
        <section id='displayComponent' className=' border border-3 border-black rounded-3 p-3 m-2'>
            <div>
                <h4>Weather Report as of: {currentTime}</h4>
                <h6>{cityCoords[city].cityName}</h6>
                <p>Weather Code: {currentWeatherCode}</p>
                <p>Temperature: {currentTemperature}°F</p>
                <p>Relative Humidity: {currentRelHumidity}%</p>
                <p>Pressure: {currentSurfacePressure}hPa</p>
                <p>Precipitation: {currentPrecipitation} inches</p>
                <p>Wind Direction: {currentWindDirection}°</p>
                <p>Wind Speed:  {currentWindSpeed} mp/h</p>
                <p>Gusts: {currentWindGust} mp/h</p>
                <p>{weatherCodes[0].image}</p>

            </div>
        </section>
        <section className=' border border-3 border-black rounded-3 p-3 m-2'>
            <div id='citySelectRadiosDiv'className='m-auto'>
                <h5>Select your city</h5>
                <Form>
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="New York City"
                        value="newYorkCity"
                        checked={city==="newYorkCity"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Boston"
                        value="boston"
                        checked={city==="boston"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Detroit"
                        value="detroit"
                        checked={city==="detroit"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Los Angeles"
                        value="losAngeles"
                        checked={city==="losAngeles"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Houston"
                        value="houston"
                        checked={city==="houston"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Nashville"
                        value="nashville"
                        checked={city==="nashville"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Knoxville"
                        value="knoxville"
                        checked={city==="knoxville"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Form.Check
                        name="selectLocation"
                        type="radio"
                        label="Portland"
                        value="portland"
                        checked={city==="portland"}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form>
            </div>
        </section>
    </>
    );
}

/*
How to format the Date and Time
function formatDateTime(isoString) {
  const date = new Date(isoString);
  
  // Extract time components
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  
  // Extract date components
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = String(date.getFullYear()).padStart(4, '0');
  
  // Return formatted string
  return `${hours}:${minutes} ${day}-${month}-${year}`;
}
*/