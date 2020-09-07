import React from 'react'
import ReactTooltip from 'react-tooltip';
export default function WeatherCard(props){

    const WeatherCardList = props.weatherData.map((weather)=>{
        return (
            <div key={weather.sol} className="col-sm my-1">
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Sol {weather.sol} / <span className="font-weight-light font-italic">Day on Mars</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{weather.season}</h6>
                    <h2 data-tip data-for={"temp-"+weather.sol}>{weather.air.temperature.average.toPrecision(3)}<sup className="font-weight-light">&deg;C</sup></h2>
                    <span>
                        <i className="fas fa-ruler-vertical " data-tip data-for={"pressure-"+weather.sol}></i> <span className="mr-2">{weather.air.pressure.average.toPrecision(4)}<sub className="font-weight-light font-italic">Pa</sub></span>
                    </span>
                    <span>
                        <i className="fas fa-wind" data-tip data-for={"wind-"+weather.sol}></i><span>{weather.wind.speed.average.toPrecision(2)}<sub className="font-weight-light font-italic">MPH</sub></span>
                    </span>
                    </div>
                    <ReactTooltip id={"temp-"+weather.sol} effect="solid" aria-haspopup='true'>
                        <ul>
                            <li>Minimum: {weather.air.temperature.minimum.toPrecision(3)}</li>
                            <li>Average: {weather.air.temperature.average.toPrecision(3)}</li>
                            <li>Maximum: {weather.air.temperature.maximum.toPrecision(3)}</li>
                        </ul>
                    </ReactTooltip>
                    <ReactTooltip id={"pressure-"+weather.sol} effect="solid" aria-haspopup='true'>
                        <ul>
                            <li>Minimum: {weather.air.pressure.minimum.toPrecision(4)}</li>
                            <li>Average: {weather.air.pressure.average.toPrecision(4)}</li>
                            <li>Maximum: {weather.air.pressure.maximum.toPrecision(4)}</li>
                        </ul>
                    </ReactTooltip>
                    <ReactTooltip id={"wind-"+weather.sol} effect="solid" aria-haspopup='true'>
                        <ul>
                            <li>Minimum: {weather.wind.speed.minimum.toPrecision(2)}</li>
                            <li>Average: {weather.wind.speed.average.toPrecision(2)}</li>
                            <li>Maximum: {weather.wind.speed.maximum.toPrecision(2)}</li>
                        </ul>
                    </ReactTooltip>
                </div>
            </div>
        )
    })


    return (
        <div className="row mx-1 align-items-center align-content-center">
            {WeatherCardList}
            
        </div>
    )
}