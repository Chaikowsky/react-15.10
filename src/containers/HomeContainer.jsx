import React, {Component, Fragment} from 'react';


import Menu from 'components/Menu';
import MainPage from 'components/MainPage';

export default class HomeContainer extends Component {




  render() {

    const {onSend} = this.props;

    return (
      
      <Fragment>
        

        <MainPage />
        
      </Fragment>

    )
  }
}