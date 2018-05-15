import * as React from 'react';

import './App.css';

const logo = require('../../logo.svg');


class App extends React.Component<any> {

    render() {

        fetch('http://localhost:8888/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email: 'admin@admin.com', password: 'secret'})
        })
            .then((res) => res.json())
            .then((object) => console.log(object.data));


        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-intro"/>
            </div>
        );
    }
}

export default App;
