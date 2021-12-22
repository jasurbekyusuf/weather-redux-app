import React, {useState} from 'react';
import {FiSearch} from "react-icons/fi"
import {useDispatch} from "react-redux";
import {changeLocation} from "../../reducers/weatherReducer";

export function Search() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(changeLocation(value));
        }} className="search">
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="search_field" placeholder="Another region"/>
            <button disabled={value.length === 0} className="search_btn"><FiSearch size={30}/></button>
        </form>
    );
}

