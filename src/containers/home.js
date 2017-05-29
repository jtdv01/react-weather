import React, { Component } from 'react';
import MyAppBar from '../components/appbar';
// import Grids from '../components/grids';
import { compose, bindActionCreators }from 'redux';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import Moment from 'moment';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPlotly from '../components/myPlotly';
import { fetchWeatherAsyncWithYahoo, setCity } from '../actions';
import CitySearch from '../components/citySearch';
import CityDetails from '../components/cityDetails';
import CityConditions from '../components/cityConditions';

class Home extends Component{

    componentDidMount(){
        this.props.fetchWeatherAsyncWithYahoo(this.props.city);
    }
    
    render(){
        const channel =  this.props['weather']['query']['results']['channel'];
        const location = channel['location'];
        const item = channel['item'];
        const condition = item['condition'];
        const forecast = item['forecast'];
        const weatherForecastData = _.map(forecast, 
            (i) => {
                // const dateTime = Moment.unix(i['date']).format("MMMM Do YYYY");
                const dateTime = i['date'];
                const tempsMin = i['low'];
                const tempsMax = i['high'];
                const text = i['text']
                return {
                    dateTime,
                    tempsMin,
                    tempsMax,
                    // img,
                    text
                }

        });


        return(
            <div className="container container-fluid">
                <MyAppBar />
                {/*<MyDrawer />*/}
                <CitySearch />
                <CityDetails location={location}/>
                <CityConditions condition={condition}/>
                {/*<Grids tilesData={weatherForecastData}/>*/}
                <div className="container container-fluid">
                    <MyPlotly weatherData={weatherForecastData}/>
                </div>
        </div>
    );
}
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ fetchWeatherAsyncWithYahoo, setCity }, dispatch);
}
const mapStateToProps = ({ weather, city }) =>{
    return {
        weather,
        city
    };
}
const composer = compose(
    connect(mapStateToProps,mapDispatchToProps)
);


export default composer(Home);