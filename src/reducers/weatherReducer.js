import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: "weather",
    initialState: {
        location: "Tashkent",
        data: null
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        }
    }
});

export const { setLocation, setData } = slice.actions;

export const changeLocation = location => dispatch => {
        dispatch(setLocation(location));
};

export const changeData = location => dispatch => {
    dispatch(setData(location));
};


export const locationSelector = (state) => state.weather.location;
export const dataSelector = (state) => state.weather.data;

export default slice.reducer;