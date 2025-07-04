# Aaron Clure
## aaronclure.webdev@gmail.com

## Weather App
- learning to make calls to an API, and organize the date that is returned.
- Weather Apps are very common beginner API teaching tools



#### API URL:
- https://api.open-meteo.com/v1/forecast?latitude=35.9606&longitude=-83.9207&current=weather_code,temperature_2m,apparent_temperature,precipitation,relative_humidity_2m,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&timezone=America%2FNew_York&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch

#### API URL Break Down
https://api.open-meteo.com/v1/forecast?
latitude=35.9606                                        controlled by user input (City Select)
&
longitude=-83.9207                                      controlled by user input (City Select)
&
current=                                                information returned    {
weather_code,
temperature_2m,
apparent_temperature,
precipitation,
relative_humidity_2m,
surface_pressure,
wind_speed_10m,
wind_direction_10m,
wind_gusts_10m                                          }
&
timezone=America %2F New_York                           controlled by user input (City Select)
&
wind_speed_unit=mph                                     units   {
&
temperature_unit=fahrenheit
&
precipitation_unit=inch                                 }



##### Weather Codes:
###### Code                    Description

- 0                   Clear sky
- 1, 2, 3	            Mainly clear, partly cloudy, and overcast
- 45, 48	            Fog and depositing rime fog
- 51, 53, 55	        Drizzle: Light, moderate, and dense intensity
- 56, 57	            Freezing Drizzle: Light and dense intensity
- 61, 63, 65	        Rain: Slight, moderate and heavy intensity
- 66, 67	            Freezing Rain: Light and heavy intensity
- 71, 73, 75      	Snow fall: Slight, moderate, and heavy intensity
- 77	                Snow grains
- 80, 81, 82          Rain showers: Slight, moderate, and violent
- 85, 86	            Snow showers slight and heavy
- 95 *	            Thunderstorm: Slight or moderate
- 96, 99 *	        Thunderstorm with slight and heavy hail


#### API Return:
{
    "latitude":35.959377,
    "longitude":-83.90481,
    "generationtime_ms":0.13494491577148438,
    "utc_offset_seconds":-14400,
    "timezone":"America/New_York",
    "timezone_abbreviation":"GMT-4",
    "elevation":276.0,

    "current_units":{
    "time":"iso8601",
    "interval":"seconds",
    "weather_code":"wmo code",
    "temperature_2m":"°F",
    "apparent_temperature":"°F",
    "precipitation":"inch",
    "relative_humidity_2m":"%",
    "surface_pressure":"hPa",
    "wind_speed_10m":"mp/h",
    "wind_direction_10m":"°",
    "wind_gusts_10m":"mp/h"},

    "current":{
    "time":"2025-07-04T04:45",
    "interval":900,
    "weather_code":0,
    "temperature_2m":66.1,
    "apparent_temperature":67.7,
    "precipitation":0.000,
    "relative_humidity_2m":82,
    "surface_pressure":985.1,
    "wind_speed_10m":4.6,
    "wind_direction_10m":11,
    "wind_gusts_10m":8.3}
}