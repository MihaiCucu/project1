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
        var filesBg = ['<svg id="filesBg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve">',
                            '<!--<style type="text/css">.st0{fill:none;stroke:#000000;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>-->',
                            '<path class="st0" d="M47.8,36.4l-3.1-2.8l-1.3-1.3c-0.6-0.6-1.4-1-2.2-1h-9.5c-3,0-5.5,2.5-5.5,5.5v2v24.3c0,3,2.5,5.5,5.5,5.5h36.7  c3,0,5.5-2.5,5.5-5.5V44.3c0-3-2.5-5.5-5.5-5.5H51.5c-0.8,0-1.5-0.3-2.1-0.8L47.8,36.4z"/>',
                        '</svg>'].join('');
        return (
            <div dangerouslySetInnerHTML={{__html: filesBg}} className="files-tab nav-item"></div>
        );
    }
}
