import React from 'react'
import WeatherCard from './WeatherCard'
export default function Home(props){

    

    return (
        <WeatherCard weatherData={props.weather} />
    )
}