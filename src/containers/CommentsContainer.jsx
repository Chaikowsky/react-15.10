import React, {Component, Fragment} from 'react';

import CommentsList from 'components/CommentsList';

import { connect} from 'react-redux';
import { load } from 'actions/comments';

class CommentsContainer extends Component {
 
  
  handleScroll = () => {
    const { loadComments } = this.props;
    if(document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 10) {
      if(!this.props.loading) {
        loadComments();
      };
    }
    // console.log(document.documentElement.scrollHeight, window.scrollY, document.body.offsetHeight, document.documentElement.clientHeight, window.innerHeight)
  }

  componentDidMount() {
    const { loadComments } = this.props;
    loadComments();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, comments } = this.props;

    return (
      <Fragment>
        <CommentsList comments= {comments} />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    comments: state.comments.entities,
    loading: state.comments.loading
  }

}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadComments: () => dispatch(load()),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);