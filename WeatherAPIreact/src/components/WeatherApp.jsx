import {useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'


export default function InputComponent()
{
    const [city, setCity] = useState('newYorkCity');
    const [searchedLatitude, setSearchedLatitude] = useState(40.7128);
    const [searchedLongitude, setSearchedLongitude] = useState(-74.0061);
    const APIurl = `https://api.open-meteo.com/v1/forecast?latitude=${searchedLatitude}&longitude=${searchedLongitude}&current=weather_code,temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=auto&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;
    const cityCoords = {
        "newYorkCity": {cityLatitude: 40.7128, cityLongitude: -74.0061},
        "boston": {cityLatitude: 42.3604, cityLongitude: -71.0580},
        "detroit": {cityLatitude: 42.3297, cityLongitude: -83.0425},
        "losAngeles": {cityLatitude: 34.0537, cityLongitude: -118.2427},
        "houston": {cityLatitude: 29.7602, cityLongitude: -95.3694},
        "nashville": {cityLatitude: 36.1673, cityLongitude: -86.7784},
        "knoxville": {cityLatitude: 35.964668, cityLongitude: -83.9264},
        "portland": {cityLatitude: 45.5152, cityLongitude: -122.6784},
    };
    let currentTime = '';
    let currentTemperature = 0;
    let currentRelHumidity =0;
    



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


return(
    <>
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

<p>{data.data.current.temperature_2m}</p>

<Form.Check
name="selectLocation"
type="radio"
label=""
value=""
/>
Future implementation
<section id='customCityDiv'>
    <Form.Check
        name="selectLocation"
        type="radio"
        label="Custom Location:"
        value="customLocation"
        checked={city==="customLocation"}
        onChange={(e) => setCity(e.target.value)}
    />
    <div className='d-flex'>
        <Row>
            <Col>
            <label htmlFor='customLatitude'>Latitude:</label>
            </Col>
            <Col>
            <input
                placeholder='Latitude:'
                id='customLatitude'
                value={customLatitude}
                onChange={(e) => setCustomLatitude(e.target.value)}
            />
            </Col>
        </Row>
        <Row>
            <Col>
            <label htmlFor='customLongitude'>Longitude:</label>
            </Col>
            <Col>
            <input
                placeholder='Longitude:'
                id='customLongitude'
                value={customLongitude}
                onChange={(e) => setCustomLongitude(e.target.value)}
            />
            </Col>
        </Row>
    </div>
    <p>(use negative values for west and south coordinates)</p>
</section>
*/