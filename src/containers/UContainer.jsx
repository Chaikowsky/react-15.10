import React, {Component, Fragment} from 'react';

import User from 'components/User';

import { connect} from 'react-redux';
import { load } from 'actions/user';

class UContainer extends Component {
 
  
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
    const { loading, users, match } = this.props;

    return (
      <Fragment>
        <User users= {users} userId={match.params.userId} />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    users: state.user.entities,
    loading: state.user.loading
  }

}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadUsers: () => load(dispatch, props.match.params.userId),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(UContainer);