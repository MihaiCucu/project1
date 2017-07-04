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
        var profileBg = ['<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">',
                            '<path d="M77.724,82.828H22.276c-0.829,0-1.5-0.672-1.5-1.5V71.031c-0.004-0.373,0.014-1.711,0.411-2.594  c0.518-1.143,1.115-1.623,1.733-2.055c2.07-1.443,13.063-8.625,26.813-8.758c0.077-0.006,0.212-0.006,0.291-0.004l0.083-0.004  c0.053,0,0.104,0.004,0.156,0.008c13.745,0.133,24.743,7.314,26.814,8.758c0.621,0.434,1.219,0.918,1.73,2.053  c0.4,0.883,0.418,2.223,0.414,2.611v10.281C79.224,82.156,78.552,82.828,77.724,82.828z M23.776,79.828h52.447v-8.797  c0.004-0.518-0.068-1.174-0.148-1.361c-0.216-0.479-0.361-0.58-0.713-0.826c-1.949-1.359-12.336-8.143-25.263-8.219  c-0.03,0-0.061-0.002-0.091-0.004h-0.01c-0.004,0-0.008,0-0.014,0c-0.028,0.002-0.058,0.004-0.087,0.004  c-12.931,0.076-23.313,6.859-25.262,8.219c-0.351,0.244-0.496,0.346-0.714,0.828c-0.078,0.184-0.149,0.84-0.146,1.346V79.828z   M50.454,51.887h-1.127c-7.046,0-12.777-5.732-12.777-12.777v-9.162c0-7.044,5.731-12.775,12.777-12.775h1.127  c7.044,0,12.775,5.731,12.775,12.775v9.162C63.229,46.155,57.498,51.887,50.454,51.887z M49.327,20.172  c-5.392,0-9.777,4.385-9.777,9.775v9.162c0,5.391,4.386,9.776,9.777,9.776h1.127c5.391,0,9.775-4.386,9.775-9.776v-9.162  c0-5.39-4.385-9.775-9.775-9.775H49.327z"/>',
                        '</svg>'].join('');

        return (
            <div dangerouslySetInnerHTML={{__html: profileBg}} className="profile-tab nav-item" onClick={this.props.clickFn}></div>
        );
    }
}
