import $ from 'jquery';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const fetchWeather= (weatherData) => {
    return { type: FETCH_WEATHER, payload: weatherData};
}


export const fetchWeatherAsyncWithYahoo = (city) => {
    return (dispatch) => {
        const query = encodeURIComponent(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city}") and u='c'`);
        const url = `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`;
        fetch(url)
            .then(data => data.json())
            .then(data => {
                if(data['query']['results'] === null || data['query']['results'] === undefined){
                    // Don't do anything, dont change the state when query didnt work
                }
                else{
                    dispatch(fetchWeather(data));
                }
            })

    }
}

/*
Google Geocoding
// import { GOOGLE_API_KEY, PROXY_API_PORT } from '../apiKeys';
export const fetchWeatherAsyncWithGoogle = (city) => {
    return (dispatch) => {
        const googleGeocode= `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&address=${city}`;
        fetch(googleGeocode)
            .then( data => data.json())
            .then( data => {
                const geometry = data['results'][0]['geometry'];  // cat sample.json | jq '.results | .[0] | .geometry'
                const lat = geometry['location']['lat'];
                const lng = geometry['location']['lng'];
                const units = 'si';
                const url = `http://localhost:${PROXY_API_PORT}/?lat=${lat}&lng=${lng}&units=${units}`;

                fetch(url)
                    .then(data => data.json())
                    .then( data=> {
                        dispatch(fetchWeather(data));
                    })
            })
            .catch(error => {
                console.error(error);
            })


    }
}
*/

export const SET_CITY = 'SET_CITY';
export const setCity= (city) => {
    return { type: SET_CITY, payload: city};
}