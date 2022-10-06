import './App.css';
import React, { useEffect, useState } from "react";
import Input from "./components/Input";

function App() {

//adding states to the application

const[degrees, setDegrees] = useState(null)
const[location, setLocation] = useState("")
const[userLocation, setuserLocation] = useState("")
const[description, setDescription] = useState("")
const[icon, setIcon] = useState("")
const[humidity, setHumidity] = useState(null)
const[wind, setWind] = useState(null)
const[dataFetched, setDataFetched] = useState(false)

//Declaring API key
const API_KEY = "c5710bba284a705d5ea43d668d40a61a";

const fetchData = async (e) => {
  e.preventDefault()

  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}&units=metric`);
  const data = await res.data

//Assigning values to states
  setDegrees(data.main.temp)
  setLocation(data.name)
  setDescription(data.weather[0].description)
  setIcon(data.weather[0].icon)
  setHumidity(data.main.humidity)
  setWind(data.wind.speed)
}

  return (
    <div className="App">
       <div className="weather">
      <Input 
      />

      <div className="weather_display">
        <h3 className="weather_location">Weather in Tokyo</h3>
        <div>
          <h1 className="weather_degrees">Temp: 32°C</h1>
        </div>
        <div className="weather_description">
          <div>
                <h3>cloudy</h3>
            </div>
                <h3>Humidity: %</h3>
                <h3>Wind speed:m/s</h3>
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
