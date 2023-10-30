import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {config} from './Constants'


class App extends Component {
    profile = config.properties.PROFILE
    const
    appcode = process.env.REACT_APP_CODE

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Hello ReactJS</h1>
                    <h3>App version is <font style={{ fontSize: '45px' }}>v1.0</font> on <font style={{ fontSize: '45px' }}>{this.profile}</font></h3>
                    <p> {this.appcode} </p>
                </header>
            </div>
        );
    }
}

export default App;
