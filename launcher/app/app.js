'use strict';

// ES6 Component
// Import React and other required components
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import store from './store'
import Dashboard from './components/dashboard.component'
import Files from './components/files.component'
import Profile from './components/profile.component'
import Settings from './components/settings.component'

import DashboardInner from './components/dashboardInner.component'


// Gamepad and keyboard navigation
import gamepad from './util/gamepad'
import navigation from './util/navigation'

// FirstPage component created as a class
class FirstPage extends React.Component {
    componentDidMount() {
        var el = ReactDOM.findDOMNode(this);

        setTimeout(function() {
            el.classList.add('mounted');
        }, 500);

        gamepad.init();
        navigation.init();
    }

    onClick(e) {
        let targetEl = e.target.closest('.nav-item'),
            parentEl = targetEl.parentNode,
            targetClass = targetEl.className;

        if (targetClass.indexOf('dashboard') > -1) {

            parentEl.classList.add('activated');
           
            store.dispatch({
                type: 'OPEN_DASHBOARD',
                dashboard: {
                    isActive: true
                },
                files: {
                    isActive: false
                },
                profile: {
                    isActive: false
                },
                settings: {
                    isActive: false
                }
            });
        } else if (targetClass.indexOf('files') > -1) {

            parentEl.classList.add('activated');
           
            store.dispatch({
                type: 'OPEN_FILES',
                dashboard: {
                    isActive: false
                },
                files: {
                    isActive: true
                },
                profile: {
                    isActive: false
                },
                settings: {
                    isActive: false
                }
            });
        } else if (targetClass.indexOf('profile') > -1) {

            parentEl.classList.add('activated');
           
            store.dispatch({
                type: 'OPEN_PROFILE',
                dashboard: {
                    isActive: false
                },
                files: {
                    isActive: false
                },
                profile: {
                    isActive: true
                },
                settings: {
                    isActive: false
                }
            });
        } else if (targetClass.indexOf('settings') > -1) {

            parentEl.classList.add('activated');
           
            store.dispatch({
                type: 'OPEN_SETTINGS',
                dashboard: {
                    isActive: false
                },
                files: {
                    isActive: false
                },
                profile: {
                    isActive: false
                },
                settings: {
                    isActive: true
                }
            });
        }
    }

    // render method is most important
    // render method returns JSX template
    render() {
        console.log(this.store);
        return (
            <div className="main-container">
                <div className="item-holder">
                    <Dashboard clickFn={this.onClick}/>
                    <Files clickFn={this.onClick}/>
                    <Profile clickFn={this.onClick}/>
                    <Settings clickFn={this.onClick}/>
                </div>
                <div className="content-wrapper">
                    <DashboardInner />
                </div>
            </div>
        );
    }
}

// Render to ID content in the DOM
ReactDOM.render( 
    <Provider store={store}>
        <FirstPage/>
    </Provider>,
    document.getElementById('content')
);
