import { DARKY_API_KEY, GOOGLE_API_KEY } from '../apiKeys';
import $ from 'jquery';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const fetchWeather= (weatherData) => {
    return { type: FETCH_WEATHER, payload: weatherData};
}



export const fetchWeatherAsync = (city) => {
    return (dispatch) => {
        /*Google Geocoding */
        const googleGeocode= `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&address=${city}`;
        fetch(googleGeocode)
            .then( data => data.json())
            .then( data => {
                const geometry = data['results'][0]['geometry'];  // cat sample.json | jq '.results | .[0] | .geometry'
                const lat = geometry['location']['lat'];
                const lng = geometry['location']['lng'];

                const url = `https://api.darksky.net/forecast/${DARKY_API_KEY}/${lat},${lng}`
                debugger;
                var myHeaders = new Headers();
                myHeaders.append("Access-Control-Allow-Origin", "https://api.darkysky.net");
                $.get(url,{
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        } 
                    })
                    .then( data => {
                        return data.json()
                    })
                    .then(data =>{
                        debugger;
                        dispatch(fetchWeather(data))
                    })
                    .catch( error => {debugger })

            })
            .catch(error => {
                console.error(error);
            })


    }
}


export const SET_CITY = 'SET_CITY';
export const setCity= (city) => {
    return { type: SET_CITY, payload: city};
}