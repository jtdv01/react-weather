import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import RaisedButton from 'material-ui/RaisedButton';
const MyAppName="React Weather";

/**
    * A simple example of `AppBar` with an icon on the right.
    * By default, the left icon is a navigation-menu.
    */

const AppBarExampleIcon = () => (
        <MuiThemeProvider> 
            <AppBar
                title={MyAppName}
                
            />
        </MuiThemeProvider>
);

export default AppBarExampleIcon;