'use strict';
// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard.component';
import Files from './components/files.component';
import Profile from './components/profile.component';
import Settings from './components/settings.component';
const gamepad = require('./util/gamepad');
const navigation = require('./util/navigation');

// FirstPage component created as a class
var FirstPage = React.createClass ({
    getInitialState: function () {
        return {
            isSelectedPage: false,
            isContentRendered: false,
            isFirstPage: true,
            activePage: false
        }
    },

    componentDidMount: function () {
        var el = ReactDOM.findDOMNode(this);

        el.classList.add('mounted');

        gamepad.default.init();
        navigation.default.init();
    },

    onClick: function(e) {
        // this.state.activePage =
    },

    // render method is most important
    // render method returns JSX template
    render: function () {
        return (
            <div className="item-holder">
                <Dashboard/>
                <Files/>
                <Profile/>
                <Settings/>
            </div>
        );
    }
});

// Render to ID content in the DOM
ReactDOM.render( <FirstPage/> ,
    document.getElementById('content')
);