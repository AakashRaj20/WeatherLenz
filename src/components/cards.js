import React from "react";
import { useEffect, useState } from "react";
import SubCard from "./subcard";
import { API_KEY } from "../apis/config";

export default function Card(props) {

    const city = props.city

    const [apiData, setApiData] = useState({})
    console.log(apiData);

    const apiKey = API_KEY
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    useEffect (() => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data))
    },[props.city, apiUrl])

   
    //to convert temp from kelvin to farenhite
    const kelvinToFarenheit = (k) => {
     return Math.round((k - 273.15).toFixed(2))
    }

    const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    
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
    }, {});

    if(dataObject !== undefined && dataObject !== null){
        return Object.entries(dataObject).slice(1, 6);
    }
};
    
    const formattedData = transformWeatherData(apiData)

    return (
        <div className="weather--card">
         {formattedData?.map(([key, wdDatum]) => (
            <SubCard
                key={key}
                date={wdDatum.date}
                day={wdDatum.day}
                description={wdDatum.description}
                feels={wdDatum.feels}
                humidity={wdDatum.humidity}
                imgSrc={wdDatum.imgSrc}
                maxTemp={wdDatum.maxTemp}
                minTemp={wdDatum.minTemp}
                wind={wdDatum.wind}
            />
        ))}

        </div>
    )
}
