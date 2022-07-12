import React, { Component } from 'react';
import {choice} from '../../helpers/helpers';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state = {boxColor: choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }

    randomColor(){
        let newColor;

        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.boxColor);

        this.setState({boxColor: newColor});

    }

    handleClick(e){
        console.log('Color Box clicked.');
    }


  render() {
    return (
      <div className='ColorBox' style={{backgroundColor: this.state.boxColor}}>
        <p>{this.props.boxColor}</p>
      </div>
    )
  }
}

export default ColorBox;