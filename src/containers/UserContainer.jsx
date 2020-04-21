import React, {Component, Fragment} from 'react';

import UserPage from 'components/UserPage';

import { connect} from 'react-redux';
import { load } from 'actions/users';

class UserContainer extends Component {
 
  
  // handleScroll = () => {
  //   if(document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 10) {
  //     if(!this.state.loading) {
  //       this.loadComments();
  //     };
  //   }
  //   console.log(document.documentElement.scrollHeight, window.scrollY, document.body.offsetHeight, document.documentElement.clientHeight, window.innerHeight)
  // }

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();

    //window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, users } = this.props;

    return (
      <Fragment>
        <UserPage users= {users} />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    users: state.users.entities,
    loading: state.users.loading
  }

}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadUsers: () => load(dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);