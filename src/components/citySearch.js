import React, { Component } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { compose, bindActionCreators }from 'redux';
import { fetchWeatherAsyncWithYahoo, setCity } from '../actions';
import { connect } from 'react-redux';

class CitySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Sydney',
            dataSource: ['Sydney', 'Melbourne', 'Brisbane', 'Adelaide', 'Perth']
        };
    }

    handleUpdateInput(city){
        this.setState({city});
        
        // TODO: add previous value
        // this.setState({
        //     dataSource: [
        //         value
        //     ],
        // });
    };

    handleClose(){
        this.props.setCity(this.state.city);
        this.props.fetchWeatherAsyncWithYahoo(this.state.city);
    }

    render() {
        return (
            <div className="container container-fluid">
            <MuiThemeProvider>
                <AutoComplete
                    hintText="Search for a city"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput.bind(this)}
                    onClose={this.handleClose.bind(this)}
                />
            </MuiThemeProvider>
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

export default composer(CitySearch);