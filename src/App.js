import './App.css';
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
