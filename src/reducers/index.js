import { FETCH_WEATHER, SET_CITY } from '../actions';
import { combineReducers } from 'redux'

const initialState = {
    weather: {
        daily: {
            data: '123'
        }
    },
    city: 'Sydney'
};

function WeatherReducer(weather = initialState.weather, action) {
    switch(action.type){
        case FETCH_WEATHER:
            return action.payload;
        default:
            return weather;
    }
}

function CityReducer(city = initialState.city, action) {
    switch(action.type){
        case SET_CITY:
            return action.payload;
        default:
            return city;
    }
}


export default combineReducers({
    weather: WeatherReducer,
    city: CityReducer
});