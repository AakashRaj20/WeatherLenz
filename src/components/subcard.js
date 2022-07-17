import React from "react";


export default function SubCard(props) {
   return (
     <div className="card">
            <h5 className="card--date">{props.day +" " + props.date}</h5>
            <img src={props.imgSrc} alt="weather-icon" className="card--icon" />
            <div classname="card--1">
                <h6>Max : {props.maxTemp}°C</h6>
                <h6>Min : {props.minTemp}°C</h6>
                <h4 className="card--description">{props.description}</h4>
            </div>
            <div className="card--2">
                <p className="card--info">Feels: {props.feels}°C</p>
                <p className="card--info">Humidity: {props.humidity}%</p>
                <p className="card--info">wind: {props.wind}Mi/S</p>
            </div>
        </div>
   )
}