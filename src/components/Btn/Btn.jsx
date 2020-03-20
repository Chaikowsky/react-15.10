import './Btn.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Btn extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
      
  }

  static defaultProps = {
    title: 'Default title',
      
  }

 
  render() {
    const {b} = this.props;
    return (
      <div className="bt">
        <h3>{b}</h3>
      </div>
      
    )
  }
}