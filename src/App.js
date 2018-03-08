import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

//Components
import Form from './form'

class App extends Component {
    constructor() {
        super()
        this.state = {
            forms: []
        }
    }
    s
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
            </div>
        );
    }
}

export default App;
