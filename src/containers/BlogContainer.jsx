import React, {Component, Fragment} from 'react';

import BlogPage from 'components/BlogPage';

import { connect} from 'react-redux';
import { load } from 'actions/blogs';

class BlogContainer extends Component {
 
  
  // handleScroll = () => {
  //   if(document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 10) {
  //     if(!this.state.loading) {
  //       this.loadComments();
  //     };
  //   }
  //   console.log(document.documentElement.scrollHeight, window.scrollY, document.body.offsetHeight, document.documentElement.clientHeight, window.innerHeight)
  // }

  componentDidMount() {
    const { loadBlogs } = this.props;
    loadBlogs();

    //window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    //window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, blogs } = this.props;

    return (
      <Fragment>
        <BlogPage blogs= {blogs} />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}

function mapStateToProps(state, props){
  return {
    ...props,
    blogs: state.blogs.entities,
    loading: state.blogs.loading
  }

}

function mapDispatchToProps(dispatch, props){
  return {
    ...props,
    loadBlogs: () => load(dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(BlogContainer);