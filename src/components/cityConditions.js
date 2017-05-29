import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CityConditions extends Component{
    render(){
        const condition = this.props['condition'] === undefined ?
            {date: "", temp: "", text: ""} : this.props['condition'];
        
        return(
            <div className="container container-fluid">
                <MuiThemeProvider>
                    <Card>
                        <div>
                            <h4> Current conditions: </h4>
                            <ul>
                            <li>{condition.date}</li>
                            <li>{condition.temp} °C</li>
                            <li>{condition.text}</li>
                            </ul>
                        </div>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default CityConditions;