import React, { Component } from 'react';
import MyAppBar from '../components/appbar';
import Grids from '../components/grids';
import { compose, bindActionCreators }from 'redux';
import { connect } from 'react-redux';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Moment from 'moment';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPlotly from '../components/myPlotly';
import { fetchWeatherAsync, setCity } from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CitySearch from '../components/citySearch';



function getCityImage(city){
    // TODO change this and use an api instead!
    switch(city.toLowerCase()){
        case 'sydney':
            return 'http://www.sydney.com/sites/default/files/styles/slider_homepagebreakpoints_theme_dnsw_base_desktop_1x/public/default-1_13.jpg?itok=PE3T4t_k'
        case 'melbourne':
            return 'http://cd.visitmelbourne.com/-/media/images/melbourne/destinations/melbourne-park_mel_r_supplied-082_1150x863.jpg?ts=20170206471229&w=480&h=360&crop=1|http://cd.visitmelbourne.com/-/media/images/melbourne/destinations/melbourne-park_mel_r_supplied-082_1150x863.jpg?ts=20170206471229&w=720&h=540&crop=1';
        case 'brisbane':
            return 'http://www.choosebrisbane.com.au/~/media/choose/corporate/brisbanesign_20150401_portrait.ashx?h=270&mh=270&mw=360&w=360';
        default:
            return 'http://www.noaa.gov/sites/default/files/styles/crop_394x394/public/thumbnails/image/FocusArea__Weather-02.jpg?itok=fO6wu2A8';
    }
}

class Home extends Component{

    componentDidMount(){
        this.props.fetchWeatherAsync(this.props.city);
    }
    render(){
        const weatherData = _.map(this.props.weather.list, 
            (i) => {
                const dateTime = Moment.unix(i.dt).format("MMMM Do YYYY, h:mm:ss a");
                const temp = i.main.temp;
                const temp_min = i.main.temp_min;
                const temp_max = i.main.temp_max;
                const img = getCityImage(this.props.city);

                return {
                    dateTime,
                    temp,
                    temp_min,
                    temp_max,
                    img
                }

        });


        return(
            <div>
                <MyAppBar />
                <p> Hey, I am still under construction! </p>
                {/*<MyDrawer />*/}

                <MuiThemeProvider>
                <Card>        
                    <CardHeader
                    title={this.props.city}
                    subtitle="Your city"
                    avatar={'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200'}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />
                </Card>
                </MuiThemeProvider>

                <CitySearch />
                <p> Todo: Integrate this a Google Search API </p>
                <Grids tilesData={weatherData}/>

                <MyPlotly weatherData={weatherData}/>
        </div>
    );
}
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ fetchWeatherAsync, setCity }, dispatch);
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