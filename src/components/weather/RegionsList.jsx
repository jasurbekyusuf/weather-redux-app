import React from 'react';
import {uzbRegions} from "../../assets/constants";
import {useDispatch} from "react-redux";
import {changeLocation} from "../../reducers/weatherReducer";

export function RegionsList() {
    const dispatch = useDispatch();
    return (
        <ul className="regions-list">
            {uzbRegions.map(item => (
                    <li key={item} className="list_item" onClick={() => dispatch(changeLocation(item))}>{item}</li>
                )
            )}
        </ul>
    );
}

