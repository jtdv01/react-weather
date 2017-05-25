import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class MyDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <Drawer open={this.state.open}>
                        <button
                            label="Toggle Drawer"
                            onClick={this.handleToggle}
                        > ||| </button>
                        <MenuItem>Menu Item</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}