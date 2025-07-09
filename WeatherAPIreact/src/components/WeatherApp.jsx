import {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'


export default function InputComponent()
{
    const [city, setCity] = useState('newYorkCity');
    const [searchedLatitude, setSearchedLatitude] = useState(40.7128);
    const [searchedLongitude, setSearchedLongitude] = useState(-74.0061);
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
    let currentTime = '';
    let currentWeatherCOde = 0;
    let currentTemperature = 0;
    let currentRelHumidity = 0;
    let currentSurfacePressure = 0;
    let currentPrecipitation = 0;
    let currentWindDirection = '';
    let currentWindSpeed = 0;
    let currentWindGust = 0;



    const [weatherInfo, setWeatherInfo] = useState(null);


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
    currentTime = weatherInfo.current.time;
    currentWeatherCOde = 0;
    currentTemperature = 0;
    currentRelHumidity = 0;
    currentSurfacePressure = 0;
    currentPrecipitation = 0;
    currentWindDirection = '';
    currentWindSpeed = 0;
    currentWindGust = 0;
}


return(
    <>
        <Button onClick={showWeatherData(weatherInfo)}>Get Weather Report</Button>
        <section id='displayComponent'>
            <div>
                <h4>Weather Report as of: {currentTime}</h4>
                <h6>{cityCoords[city].cityName}</h6>
                <p>Weather Code:</p>
                <p>Current Temperature:</p>
                <p></p>
                    
   {/*
    let currentTime = '';
    let currentWeatherCOde = 0;
    let currentTemperature = 0;
    let currentRelHumidity = 0;
    let currentSurfacePressure = 0;
    let currentPrecipitation = 0;
    let currentWindDirection = '';
    let currentWindSpeed = 0;
    let currentWindGust = 0;
   */} 
            </div>
        </section>
        <section className=' border border-3 border-black rounded-3 p-3'>
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
        <p>Current City: {city}</p>
        <p>Searched Lat: {searchedLatitude}</p>
        <p>Searched Long: {searchedLongitude}</p>

    </>
    );
}

/*



*/