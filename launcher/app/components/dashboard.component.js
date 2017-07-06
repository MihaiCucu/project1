'use strict';

import React from 'react'
import ReactDom from 'react-dom'
import store from '../store'
import {connect} from 'react-redux'

// think of a better way of mapping...maybe move to a different file
const mapStateToProps = store => {
    return {
        dashboard: store.dashboard
    }
};

let icons;

class Dashboard extends React.Component {
    componentDidMount() {
        let dashBgEl = ReactDom.findDOMNode(this);
        
        icons = new SVGMorpheus('#svgDashboard', {
            rotation: 'none',
            duration: 400
        });

        dashBgEl.addEventListener('mouseenter', (e) => {
            dashBgEl.classList.add('active');
            
            dashBgEl.className.indexOf('selected') > -1 ? '' : icons.to('active');
        });

        dashBgEl.addEventListener('mouseleave', (e) => {
            dashBgEl.classList.remove('active');
            
            dashBgEl.className.indexOf('selected') > -1 ? '' : icons.to('initial');
        });
    }

    componentDidUpdate() {
        if (this.props.dashboard.isActive) {
            icons.to('active');
        } else {
            icons.to('initial');
        }
    }

    render () {

        return (
            <div className={'dashboard-tab nav-item ' + (this.props.dashboard.isActive ? 'selected' : '')} 
                onClick={this.props.clickFn}>

                <object data="public/images/icons/dashboard.svg" 
                    type="image/svg+xml" 
                    id="svgDashboard"/>

                {this.props.dashboard.isActive ? <DashboardInner/> : ''}

            </div>
        );
    }
}

// connect returns a function which is called with the class as an argument
export default connect(mapStateToProps)(Dashboard)
