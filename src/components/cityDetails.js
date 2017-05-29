import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CityDetails extends Component{
    render(){
        const location = this.props['location'] === undefined ? 
            {city: "", country: "", region: ""}
            : this.props['location'];

        return(
        <div className="container container-fluid">
            <MuiThemeProvider>
            <Card>
                <div>
                    <CardHeader
                    title={this.props.city}
                    subtitle="Your city"
                    avatar={'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200'}
                    actAsExpander={true}
                    showExpandableButton={true}
                    />

                    <h4>{location.city} </h4>
                    <ul>
                        <li>{location.region} </li>
                        <li>{location.country} </li>
                    </ul>
                </div>
            </Card>
            </MuiThemeProvider>
        </div>
        );
    }
}

export default CityDetails;