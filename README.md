
# WeatherLenz - A Weather Forecast App

Hi folks, this is the weather project called WeatherLenz, that I have developed using #reactjs.

Link to the Web-App :https://lnkd.in/dqEkdenv

Tech Stack used in the project :
 1. HTML5
 2. CSS3
 3. JavaScript

FRAMEWORK :
 1. ReactJs

API :
1. Open weather Map API

VERSION CONTROL :
1. #git & #github

DEPLOYMENT :
1. Netlify

The purpose of this project was to apply, #reactjs concepts like
1. React Hooks
2. React UseState
3. Dynamic Rendering
4. Props
5. Functions Like : filter(), reducer, map(), fetch()
6. Data fetching
and #apiintegration

Kindly, have a look at code in the github repository and feel free to raise issues or give suggestions regarding the code.


## Code Snipets

### React useState
const [apiData, setApiData] = useState({})
  
   const apiKey = API_KEY
   const apiurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

It is used to store data from api response.

### React useEffect

   useEffect(() => {

      fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
   },[apiurl]);

It is used to fetch data from url and re-render the components whenever the apiurl changes

### Function to sort the bulk data using Reducer()
const transformWeatherData = (weatherData) => {
        const dataObject = weatherData.list?.reduce((acc, weatherDatum) => {
        const date = new Date(weatherDatum.dt * 1000);
        const formattedDate = date.toLocaleDateString("en-US");
        if (acc[formattedDate]) return acc;

        const newWeatherDatum = {
        date: date.getDate(),
        day:  weekday[date.getDay(date.getDay())],
        description: weatherDatum.weather[0]?.description,
        feels: kelvinToFarenheit(weatherDatum.main.feels_like),
        formattedDate,
        humidity: weatherDatum.main.humidity,
        imgSrc: `http://openweathermap.org/img/w/${weatherDatum.weather?.[0].icon}.png`,
        maxTemp: kelvinToFarenheit(weatherDatum.main.temp_max),
        minTemp: kelvinToFarenheit(weatherDatum.main.temp_min),
        wind: weatherDatum.wind.speed,
        };

        return { ...acc, [formattedDate]: newWeatherDatum };
    }, {})

    const formattedData = transformWeatherData(apidata)

API gave data for every hour for 5 days.

The data for the 5 days forecast required for the project was 
1. Only one data for each of the days.
   for ex :~

Raw data from API :

list": [
    {
      "dt": 1662562800,
      "main": {
        "temp": 308.37,
        "feels_like": 309.61,
        "temp_min": 308.37,
        "temp_max": 308.71,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 981,
        "humidity": 36,
        "temp_kf": -0.34
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 30
      },
      "wind": {
        "speed": 3.26,
        "deg": 14,
        "gust": 5.01
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-09-07 15:00:00"
    },
    {
      "dt": 1662573600,
      "main": {
        "temp": 306.93,
        "feels_like": 308.45,
        "temp_min": 306.3,
        "temp_max": 306.93,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 982,
        "humidity": 41,
        "temp_kf": 0.63
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 36
      },
      "wind": {
        "speed": 3.24,
        "deg": 33,
        "gust": 5.47
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-09-07 18:00:00"
    },
    {
      "dt": 1662584400,
      "main": {
        "temp": 304.55,
        "feels_like": 306.23,
        "temp_min": 304.55,
        "temp_max": 304.55,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 982,
        "humidity": 49,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 3
      },
      "wind": {
        "speed": 2.74,
        "deg": 46,
        "gust": 4.52
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2022-09-07 21:00:00"
    },


Data after using transformWeatherData on above api data we get :

0: Array(2)

   0: "9/8/2022"

   1: {date: 8, day: 'Thu', description: 'moderate rain', feels: 32, formattedDate: '9/8/2022', …}
   
   length: 2

1: Array(2)
   
   0: "9/9/2022"
   
   1: {date: 9, day: 'Fri', description: 'moderate rain', feels: 31, formattedDate: '9/9/2022', …}
   
   length: 2

2: Array(2)
   
   0: "9/10/2022"
   
   1: {date: 10, day: 'Sat', description: 'light rain', feels: 30, formattedDate: '9/10/2022', …}
   
   length: 2

3: Array(2)
   
   0: "9/11/2022"
   
   1: {date: 11, day: 'Sun', description: 'light rain', feels: 30, formattedDate: '9/11/2022', …}
   
   length: 2

4: Array(2)
   
   0: "9/12/2022"
   
   1: {date: 12, day: 'Mon', description: 'moderate rain', feels: 26, formattedDate: '9/12/2022', …}
   
   length: 2

length: 5



### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## A very thankyou who guided me in my project.
