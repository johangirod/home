import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import Logo from './Logo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Logo />
                <Header title='Taskim' />
            </div>
        );
    }
}

export default App;
