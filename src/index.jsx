import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import {Provider} from 'react-redux';
import store from './store';



import Menu from './components/Menu';
import Content from './components/Content';
import Timer from './components/Timer';
import CommentsContainer from 'containers/CommentsContainer';
import BlogContainer from 'containers/BlogContainer';
import HomeContainer from 'containers/HomeContainer';
import CommentContainer from 'containers/CommentContainer';
import UserContainer from 'containers/UserContainer';
import UContainer from 'containers/UContainer';


import {Container, Button} from 'react-bootstrap';


const items =[
    {href: '/', title: 'Home'},
    {href: '/users', title: 'Users'},
    {href: '/comments', title: 'Comments'},
    {href: '/blogs', title: 'Blogs'},
]



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[],
            isModal: false,
            activePage: 'Home',
        }
    }



 
    render () {

        return (
            <div className="box">
                <Menu items={items} />
                <Switch>
                    {routes.map((route, idx)=> <Route key={idx} {...route} />)}
                </Switch>

            </div>
        )
    }
}

ReactDom.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));