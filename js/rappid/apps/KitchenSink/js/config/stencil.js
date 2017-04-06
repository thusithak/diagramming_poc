/*! Rappid v2.1.0 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2017-04-03 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


var App = App || {};
App.config = App.config || {};

(function() {

    'use strict';

    App.config.stencil = {};

    App.config.stencil.groups = {
        erd: { index: 4, label: 'Elements' }
    };

    App.config.stencil.shapes = {};

    App.config.stencil.shapes.basic = [
        {
            type: 'basic.Rect',
            size: { width: 5, height: 3 },
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                rect: {
                    rx: 2,
                    ry: 2,
                    width: 50,
                    height: 30,
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                text: {
                    text: 'rect',
                    fill: '#c6c7e2',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11,
                    'stroke-width': 0
                }
            }
        },
        {
            type: 'basic.Circle',
            size: { width: 5, height: 3 },
            attrs: {
                '.': {
                    'data-tooltip': 'Ellipse',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                circle: {
                    width: 50,
                    height: 30,
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                text: {
                    text: 'ellipse',
                    fill: '#c6c7e2',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11,
                    'stroke-width': 0
                }
            }
        },
        {
            type: 'app.RectangularModel',
            size: { width: 40, height: 30 },
            inPorts: ['in1', 'in2'],
            outPorts: ['out'],
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Rectangle with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0'
                },
                '.label': {
                    text: 'rect',
                    fill: '#c6c7e2',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11,
                    'stroke-width': 0,
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                }
            }
        },
        {
            type: 'app.CircularModel',
            size: { width: 5, height: 3 },
            inPorts: ['in1', 'in2'],
            outPorts: ['out'],
            allowOrthogonalResize: false,
            attrs: {
                '.': {
                    'data-tooltip': 'Ellipse with ports',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.body': {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    'stroke-width': 2,
                    'stroke-dasharray': '0',
                    'rx': '50%',
                    'ry': '50%'
                },
                '.label': {
                    text: 'ellipse',
                    fill: '#c6c7e2',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 11,
                    'stroke-width': 0,
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                }
            }
        },
        {
            type: 'basic.Image',
            size: { width: 53, height: 42 },
            attrs: {
                '.': {
                    'data-tooltip': 'Image',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                image: {
                    width: 53,
                    height: 42,
                    'xlink:href': 'assets/image-icon1.svg'
                },
                text: {
                    text: 'image',
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    'font-size': 9,
                    display: '',
                    stroke: '#000',
                    'stroke-width': 0,
                    'fill': '#222138'
                }
            }
        }
    ];


    App.config.stencil.shapes.erd = [

        {
            type: 'erd.Entity',
            attrs: {
                '.': {
                    'data-tooltip': 'Scrum Project',
                    'data-tooltip-position': 'left',
                    'data-tooltip-position-selector': '.joint-stencil'
                },
                '.outer': {
                    rx: 3,
                    ry: 3,
                    fill: '#5082d0',
                    'stroke-width': 2,
                    stroke: 'transparent',
                    'stroke-dasharray': '0'
                },
                text: {
                    text: 'SP',
                    'font-size': 24,
                    'font-family': 'Roboto Condensed',
                    'font-weight': 'Normal',
                    fill: '#f6f6f6',
                    'stroke-width': 0
                }
            }
        }

    ];


})();
