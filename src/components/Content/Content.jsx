import './Content.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Image, Button, Container} from 'react-bootstrap';



export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            message:'',
        }
    }
    static propTyoes = {
        title: PropTypes.string.isRequired,
        text: PropTypes.string
    }

    static defaultProps = {
        title: 'Default menu title',
        text: 'Some text',
    }

    handleChange = (e) =>{
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        const {title, text, pic} = this.props;
        const {message} = this.state;
        return (
            <Container>
                <h2>{title}</h2>
                <p>by <a href="#">Start Bootstrap</a></p>
                <hr />
                <p>Posted on January 1, 2020 at 12:00 PM</p>
                <hr />
                <Image src={pic} rounded />
                <p>{text}</p>
                <hr />
                <div className="label-text">
                    <div className="t">Leave a Comment:</div>
                </div>
                <div className="form-comment">
                    
                    <textarea onChange={this.handleChange} name="message" value={message} />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                      
                    

                </div>
                

            </Container>
        )
    }
}