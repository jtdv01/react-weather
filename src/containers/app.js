import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '../reducers/store';
import Home from './home';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Home />

            </Provider>
        );
    }

                //     {/*<Router history={hashHistory}>
                //     <Route exact path="/" component={Home} />
                // </Router>*/}


}

export default App;