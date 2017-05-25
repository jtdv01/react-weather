import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { compose, bindActionCreators }from 'redux';
import { fetchWeatherAsync, setCity } from '../actions';
import { connect } from 'react-redux';

class CitySearch extends Component {
    state = {
        city: 'Sydney',
        dataSource: ['Sydney', 'Melbourne', 'Brisbane', 'Adelaide', 'Perth']
    };

    handleUpdateInput = (city) => {
        this.setState({city});
        
        // TODO: add previous value
        // this.setState({
        //     dataSource: [
        //         value
        //     ],
        // });
    };

    handleClose = () => {
        this.props.setCity(this.state.city);
        this.props.fetchWeatherAsync(this.state.city);
    }

    render() {
    return (
        <MuiThemeProvider>
            <AutoComplete
                hintText="Search for a city"
                dataSource={this.state.dataSource}
                onUpdateInput={this.handleUpdateInput}
                onClose={this.handleClose}
            />
        </MuiThemeProvider>
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

export default composer(CitySearch);