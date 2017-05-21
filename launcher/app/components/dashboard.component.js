'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import DashboardContent from './dashboard-content';

export default class Dashboard extends React.Component {
    componentDidMount () {
        let dashBgEl = ReactDom.findDOMNode(this);

        dashBgEl.addEventListener('mouseenter', (e) => {
            dashBgEl.classList.add('active');
        });

        dashBgEl.addEventListener('mouseleave', (e) => {
            dashBgEl.classList.remove('active');
        });
    }

    activationHandler (e) {
        let dashEl = ReactDom.findDOMNode(this),
            parentElement = dashEl.parentNode,
            siblings = parentElement.querySelectorAll('.nav-item');
debugger;
        // remove selected class from all elements
        for (var i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove('selected');
        }

        // add active/selected classes
        parentElement.classList.add('activated');
        dashEl.classList.add('selected');
    }

    render () {
        var dashBg = ['<svg id="dash-bg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">',
                    '<g>',
                        '<rect x="11" y="11.5" width="16" height="15"/>',
                        '<rect x="11" y="42.5" width="16" height="15"/>',
                        '<rect x="11" y="73.5" width="16" height="15"/>',
                        '<rect x="42" y="11.5" width="16" height="15"/>',
                        '<rect x="42" y="42.5" width="16" height="15"/>',
                        '<rect x="42" y="73.5" width="16" height="15"/>',
                        '<rect x="73" y="11.5" width="16" height="15"/>',
                        '<rect x="73" y="42.5" width="16" height="15"/>',
                        '<rect x="73" y="73.5" width="16" height="15"/>',
                    '</g>',
                '</svg>'].join('');
        return (
            <div onClick={this.activationHandler.bind(this)} dangerouslySetInnerHTML={{__html: dashBg}} className="dashboard-tab nav-item">
            </div>
        );
    }
}
