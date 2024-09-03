
const WeatherApp = () => {
    const apiKey = import.meta.env.VITE_CRANKY_WEATHER_API_KEY
  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">London</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="weather">
                <div className="current-conditions">Clear</div>
                <div className="temperature">80&deg;</div>
            </div>
            <div className="weather-date">
                <p>Friday, August 9</p>
            </div>

            
        </div>
    </div>
  )
}

export default WeatherApp