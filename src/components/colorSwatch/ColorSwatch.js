import React, { Component } from 'react';
import ColorBox from '../colorBox/ColorBox';
import './ColorSwatch.css';

class ColorSwatch extends Component {
    static defaultProps = {
        numBoxes: 16,
        boxColorLibrary: [
            '#54525b',
            '#615e69',
            '#6d6a76',
            '#797683',
            '#b20000',
            '#990000',
            '#7f0000',
            '#660000',
            '#7114c5',
            '#7f2bca',
            '#8d42d0',
            '#9b5ad6',
            '#0000b2',
            '#000099',
            '#00007f',
            '#000066'
        ]
    };
    render() {

        const boxes = Array.from({length: this.props.numBoxes}).map(() => (<ColorBox colors={this.props.boxColorLibrary}/>));

        return (
            <div>
                <h1>ColorSwatch</h1>
                <div className='ColorSwatchContainer'>
                    <div className='ColorSwatchContainer-box-holder'>
                        {boxes}
                    </div>
                </div>
            </div>
        )
    }
}

export default ColorSwatch;