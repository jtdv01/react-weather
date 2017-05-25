import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import _ from 'lodash';
import Plotly from 'plotly.js/dist/plotly-cartesian';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
const PlotlyComponent = createPlotlyComponent(Plotly);

class MyPlotly extends Component {
    render() {

        const weatherData = this.props.weatherData;
        const dateTimes = _.map(weatherData, i => i.dateTime);
        const tempsMax = _.map(weatherData, i => i.tempsMax);
        const tempsMin = _.map(weatherData, i => i.tempsMin);

        let data = [
            {
                type: 'line',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
                x: dateTimes,     // more about "x": #scatter-x
                y: tempsMax,     // #scatter-y
                name: "Max temp",
                marker: {         // marker is an object, valid marker keys: #scatter-marker
                    color: 'rgb(100, 32, 77)' // more about "marker.color": #scatter-marker-color
                }
            },
            {
                type: 'line',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
                x: dateTimes,     // more about "x": #scatter-x
                y: tempsMin,     // #scatter-y
                name: "Min temp",
                marker: {         // marker is an object, valid marker keys: #scatter-marker
                    color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
                }
            }
        ];

        let layout = {                     // all "layout" attributes: #layout
            title: 'Weather forecast',  // more about "layout.title": #layout-title
            xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
                title: 'time'         // more about "layout.xaxis.title": #layout-xaxis-title
            }
        };

        let config = {
            showLink: false,
            displayModeBar: true
        };
        return (
            <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
        );
    }
}

export default MyPlotly;