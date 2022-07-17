import React from "react"
import { useEffect, useState } from "react"
import { API_KEY } from "../apis/config"
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"


export default function InfoChart(props) {

  const city = props.city

  const [apiData, setApiData] = useState({})
  
   const apiKey = API_KEY
   const apiurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

      useEffect(() => {

      fetch(apiurl)
      .then((res) => res.json())
      .then((data) => setApiData(data))
   },[apiurl])

   const humidity = apiData?.list?.map((x) => x.main)
   const humidData = humidity?.map((x) => x.humidity)

   const weekDay = ["Sun","Mon", "Tue", "Wed", "Thu", "Fri","Sat"]
   const date = apiData?.list?.map((x) => x.dt)
   const convTime = (k) => {
      const dt = new Date(k * 1000)
      let hours = dt.getHours() >= 12 ? dt.getHours()-12 + " PM" : dt.getHours() + " AM"
       const date = weekDay[dt.getDay()] + " " + dt.getDate() + ", " + hours
      return date
   }
  
   const formattedTime = date && date.map(convTime)

   const wind = apiData?.list?.map((x) => x.wind)
   const windData = wind?.map((x) => x.speed)

   const [button, setButton] = useState({
      state:true
   })

   const windClick = () => {
      setButton(prevButton => ({
         ...prevButton,
         state: false
      }))
   }

      const humidClick = () => {
      setButton(prevButton => ({
         ...prevButton,
         state: true
      }))
   }

   const data = {
    labels : formattedTime,
    datasets: [{
        label : button.state ? "Hourly Humidity Data (%)" : "Hourly Wind Data (Mi/s)",
        data : button.state ? humidData : windData,
        backgroundColor: ["#3700B3"],
    }],
    options: {
      maintainAspectRatio : true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
   }
  
   return (
    <div className="chart">
         <button className="chart--humidity" onClick={humidClick} type="button">HUMIDITY</button>
         <button className="chart--wind" onClick={windClick} type="button">WIND</button>
         {apiData ? <Line className="line--chart" data = {data} /> : null }
    </div>
   )
}