'use strict';

import React from 'react';
import ReactDom from 'react-dom';

export default class Profile extends React.Component {
    componentDidMount () {
        let profileBgEl = ReactDom.findDOMNode(this);

        profileBgEl.addEventListener('mouseenter', (e) => {
            profileBgEl.classList.add('active');
        });

        profileBgEl.addEventListener('mouseleave', (e) => {
            profileBgEl.classList.remove('active');
        });
    }

    render () {

        return (
            <div className="profile-tab nav-item" onClick={this.props.clickFn}>
                <object data="public/images/icons/profile.svg" 
                    type="image/svg+xml" 
                    id="svgProfile"/>
            </div>
        );
    }
}
