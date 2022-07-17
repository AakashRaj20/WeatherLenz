import React from "react"
import { useEffect, useState } from "react"
import Target from "../images/target.png"
import { API_KEY } from "../apis/config"
import CurrentInfo from "./currentinfo"
import InfoChart from "./infochart"
import Card from "./cards"


export default function SearchBar() {


     // State to store data from api
    const [apiData, setApiData] = useState({})

    //state to city name from input field
    const [getState, setGetState] = useState('Mumbai')

    //state to keep a copy of getstate
    const [state, setState] = useState('Mumbai');


   // API KEY AND URL
   const apiKey = API_KEY;
   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`


   //effect
   useEffect(() => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data))
    }, [apiUrl])

    //to get data from inout field and store it in getState
    const inputHandler = (event) => {
      setGetState(event.target.value);
    }
    
    //copy the state from getState to state
    const submitHandler = (event) => {
       setGetState(event.preventDefault())  
       setState(getState)
    };

    //to convert temp from kelvin to farenhite
    const kelvinToFarenheit = (k) => {
     return Math.round((k - 273.15).toFixed(2))
    }
    
    return (
        
        <div className="search--container">
            <form className="search--bar">
                 <input 
                 className="form--search" 
                 type="search" 
                 placeholder="Mumbai"
                 onChange={inputHandler}
                 value={getState} 
                 city={getState}
                 />

                 <button 
                   className="target--btn"
                   onClick={submitHandler}
                   type="submit"
                   >
                    <img 
                    src={Target} 
                    alt="" 
                    className="target--img" 
                    />
                </button>
            </form>

             <div className="info">
                 <CurrentInfo
                city={apiData.name} 
                country={apiData?.Sys?.country}
                temp={kelvinToFarenheit(apiData.main?.temp_max)} 
                feels={kelvinToFarenheit(apiData.main?.feels_like)}
                weather={apiData.weather?.[0].description}
                />

                <InfoChart 
                    city={apiData.name}
                />

             </div>

            <div className="main--card">
                <Card city={apiData.name} /> 
            </div>
           
            
        </div>
        
    )
}