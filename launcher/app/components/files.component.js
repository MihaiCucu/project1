'use strict';

import React from 'react';
import ReactDom from 'react-dom';

export default class Files extends React.Component {
    componentDidMount () {
        let filesBgEl = ReactDom.findDOMNode(this);

        filesBgEl.addEventListener('mouseenter', (e) => {
            filesBgEl.classList.add('active');
        });

        filesBgEl.addEventListener('mouseleave', (e) => {
            filesBgEl.classList.remove('active');
        });
    }

    render () {
        return (
            <div className="files-tab nav-item" onClick={this.props.clickFn}>
                <object data="public/images/icons/file.svg" 
                    type="image/svg+xml" 
                    id="svgFiles"/>
            </div>
        );
    }
}
