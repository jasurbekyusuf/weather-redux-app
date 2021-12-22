import React, {useEffect, useState} from 'react';
import "./assets/weather-wrapper.css"
import axios from "axios";
import {api, weatherMain} from "../../assets/constants";
import {Sidebar} from "./Sidebar";
import {WeatherInfoBody} from "./WeatherInfoBody";
import {useSelector, useDispatch} from "react-redux";
import {changeData, dataSelector, locationSelector} from "../../reducers/weatherReducer";

export function WeatherWrapper() {
    const location = useSelector(locationSelector);
    const data = useSelector(dataSelector);
    const dispatch = useDispatch();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [media, setMedia] = useState("Clear");
    useEffect(() => {
        setLoading(true);
        axios.get(`${api.baseApi}weather?q=${location}&appid=${api.apiKey}&units=metric`).then(res => {
            dispatch(changeData(res.data));
            weatherMain?.forEach(item => {
                if (item.value.toLowerCase() === res.data.weather[0].main.toLowerCase()) {
                    setMedia(item.media);
                }
            });
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            dispatch(changeData(null));
            setError(err.response.data);
        })
    }, [location]);


    return (
        <div className="weather-wrapper" style={{
            background: `url(${media}) center center no-repeat`,
        }}>
            <div className="weather_info">
                <div className="container">
                    <h2>the.weather</h2>

                    {loading ? <h1>Loading...</h1> : (
                        !data ? (<h2>{error?.message}</h2>)
                            : (
                                <WeatherInfoBody/>
                            )
                    )}
                </div>
            </div>
            <Sidebar error={error} loading={loading}/>
        </div>
    );
}

