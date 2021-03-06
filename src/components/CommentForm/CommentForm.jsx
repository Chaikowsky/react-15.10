import './CommentForm.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            message: '',
        }
    }
  
    static propTypes = {
         onSend: PropTypes.func,
    }
    

    handleChange = (e) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
   
    handleClick = ()=> {
        const {onSend} = this.props;
        this.setState({message:''});
        if(typeof onSend === 'function'){
            onSend(this.state);
        }
    }

    // static defaultProps = {
    //     title: 'Default menu title',
    //     items: [],
    // }

    render() {
        const {author, message} = this.state;
        return (
            <Fragment>
                <br /><input onChange={this.handleChange} name='author' value={author} type='text' /><br />
                <textarea onChange={this.handleChange} name='message' value={message}></textarea>
                <button onClick = {this.handleClick}>Send</button>
            </Fragment>
        )
    }
}