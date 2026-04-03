import axios from "axios"

const API_KEY = "43bfba3847a547198e4a0f74ac38fb00"

export const getWeatherRisk = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )

    const weather = res.data.weather[0].main

    if (weather.includes("Rain") || weather.includes("Storm")) {
      return "bad"
    }

    return "good"
  } catch (err) {
    console.error(err)
    return "good"
  }
}