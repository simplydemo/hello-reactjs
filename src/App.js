import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcom to React</h1>
                    <h1 className="App-title">This version is v1.0</h1>

                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to relaod.
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
