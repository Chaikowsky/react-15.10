import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ReactDom from 'react-dom';



import Menu from './components/Menu';
import Content from './components/Content';

import {Container, Button} from 'react-bootstrap';



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[],
        }
    }
 
    render () {
        const {comments}=this.state;
        return (
            <div className="box">
                <Menu />
                <Content title="Post Title" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum minus inventore?" pic="../../images/1.png" />
              <Container>
                  

                  
                  <Button >Btn</Button >
                    
              </Container>
              
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));