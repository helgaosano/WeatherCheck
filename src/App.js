import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
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

  setDataFetched(true)
  //console.log(data)

}

const defaultDataFetched = async () => {

  if(!dataFetched){
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${API_KEY}&units=metric`);
  const data = await res.data

    setDegrees(data.main.temp)
    setLocation(data.name)
    setDescription(data.weather[0].description)
    setIcon(data.weather[0].icon)
    setHumidity(data.main.humidity)
    setWind(data.wind.speed)
   
    }

  }


//Calling the function in UseEffect
useEffect(() => {
  defaultDataFetched() 
 }, [])


  return (
    <div className="App">
    <div className="weather">
      <Input 
        text={(e) => setuserLocation(e.target.value)}
        submit = {fetchData}
        func={fetchData}
      />

      <div className="weather_display">
        <h3 className="weather_location">Weather in {location}</h3>

        
        <div>
          <h1 className="weather_degrees">Temp: {degrees}°C</h1>
        </div>

        <div className="weather_description">

          <div>
            <div className="weather_description_head">
              <span className="weather_icon" >
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather_icon" />
               </span>
                <h3>{description}</h3>
            </div>
            
                <h3>Humidity: {humidity}%</h3>
                <h3>Wind speed: {wind}m/s</h3>
          </div>
        </div>
      </div>
    </div>  
  </div>
  );
  
}
export default App;
