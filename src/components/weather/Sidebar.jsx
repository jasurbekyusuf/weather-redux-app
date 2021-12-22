import React from 'react';
import "./assets/sidebar.css"
import {RegionsList} from "./RegionsList";
import {Search} from "./Search";
import {WeatherInfoBody} from "./WeatherInfoBody";
import {WeatherDetails} from "./WeatherDetails";
import {useSelector} from "react-redux";
import {dataSelector} from "../../reducers/weatherReducer";

export function Sidebar({ loading, error}) {

    const data = useSelector(dataSelector);

    return (
        <div className="sidebar">
            <Search />
            <div className="sidebar_weather-info">
                {loading ? <h1>Loading...</h1> : (
                    !data ? (
                        <h2>{error?.message}</h2>
                    ) : (
                        <WeatherInfoBody  />
                    )
                )}
            </div>
            <div className="sidebar_list-root">
                <div className="list-container">
                    <RegionsList />
                </div>
            </div>
            <div className="sidebar_list-root">
                <div className="list-container">
                    <h2>Weather Details</h2>
                    {data && <WeatherDetails />}
                </div>
            </div>
        </div>
    );
}

