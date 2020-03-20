import './Counter.css';

import React, { Component, Fragment } from 'react';
//import PropTypes from 'prop-types';


export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 1,
        }
    }

    handleClick = (e) =>{
        const addittion = event.target.name === 'minus' ? -1 : 1;
        this.setState((prevState)=>({
            ...prevState,
            counter: prevState.counter+ addittion,
        }));

    }
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     items: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             title: PropTypes.string.isRequired,
    //             href: PropTypes.string.isRequired,
    //         })
    //     )
    // }

    // static defaultProps = {
    //     title: 'Default menu title',
    //     items: [],
    // }

    render() {
        const {counter} = this.state;
        return (
            <Fragment>
                <button name='plus' onClick={this.handleClick}>-</button>
                {counter}
                <button name='minus' onClick={this.handleClick}>+</button>
            </Fragment>
        )
    }
}