'use strict';

import React from 'react';
import ReactDom from 'react-dom';

export default class Settings extends React.Component {
    componentDidMount () {
        let settingsBgEl = ReactDom.findDOMNode(this);

        settingsBgEl.addEventListener('mouseenter', (e) => {
            settingsBgEl.classList.add('active');
        });

        settingsBgEl.addEventListener('mouseleave', (e) => {
            settingsBgEl.classList.remove('active');
        });
    }

    render () {

        return (
            <div className="settings-tab nav-item" onClick={this.props.clickFn}>
                <object data="public/images/icons/settings.svg" 
                    type="image/svg+xml" 
                    id="svgSettings"/>
            </div>
        );
    }
}
