import {useState} from 'react'

const WeatherApp = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const apiKey = import.meta.env.VITE_CRANKY_WEATHER_API_KEY

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    const search = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`

        const res = await fetch(url)

        const searchData = await res.json()
        console.log(searchData)
        setData(searchData)
        setLocation('')
    }
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search()
        }
    }

  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="fa-solid fa-location-dot"></i>
                    <div className="location">{data.name}</div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" value={location} onChange={handleLocation} onKeyDown={handleKeyDown}/>
                    <i className="fa-solid fa-magnifying-glass" onClick={search}></i>
                </div>
            </div>
            <div className="weather">
                <div className="current-conditions">{data.weather ? data.weather[0].main : null}</div>
                <div className="temperature">{data.main ? `${Math.floor(data.main.temp)}° F` : null}</div>
            </div>
            <div className="weather-date">
                <p>Friday, August 9</p>
            </div>

            
        </div>
    </div>
  )
}

export default WeatherApp