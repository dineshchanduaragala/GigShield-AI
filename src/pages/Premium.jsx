import { useState } from "react"
import { predictPremium } from "../utils/premiumModel"
import { getWeatherRisk } from "../utils/weatherService"

export default function Premium() {
  const [risk, setRisk] = useState(1)
  const [city, setCity] = useState("")
  const [hours, setHours] = useState(8)
  const [premium, setPremium] = useState(0)
  const [weatherStatus, setWeatherStatus] = useState("unknown")

  const handleCheckWeather = async () => {
    const result = await getWeatherRisk(city)
    setWeatherStatus(result)
  }

  const calculate = () => {
    const result = predictPremium({
      risk: Number(risk),
      weather: weatherStatus,
      workHours: Number(hours)
    })
    setPremium(result)
  }

  return (
    <div className="container">
      <h2>Smart Premium System 🌍</h2>

      <input
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleCheckWeather}>
        Check Weather Risk
      </button>

      <p>Weather Risk: {weatherStatus}</p>

      <input
        type="number"
        placeholder="Risk Level"
        onChange={(e) => setRisk(e.target.value)}
      />

      <input
        type="number"
        placeholder="Work Hours"
        onChange={(e) => setHours(e.target.value)}
      />

      <button onClick={calculate}>
        Generate Premium
      </button>

      <h3>₹{premium} / week</h3>
    </div>
  )
}