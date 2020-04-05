import React, {Component, Fragment} from 'react';

import BlogPage from 'components/BlogPage';
import Menu from 'components/Menu';

export default class UserContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      blogs: [],
      page: 0,
    }
  }

  loadComments = () => {
    this.setState({page: this.state.page + 1})
    const { page } = this.state;
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page= ${ page }`).then((response) => response.json()).then((blogs) => {
      this.setState({
        loading: false,
        blogs: this.state.blogs.concat(blogs),
      })
    })
    .catch(() => { this.setState({loading: false});  });
  }

  handleScroll = () => {
    if(document.documentElement.scrollHeight - window.scrollY - window.innerHeight < 10) {
      if(!this.state.loading) {
        this.loadComments();
      };
    }
    console.log(document.documentElement.scrollHeight, window.scrollY, document.body.offsetHeight, document.documentElement.clientHeight, window.innerHeight)
  }

  componentDidMount() {
    this.loadComments();

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const { loading, blogs } = this.state;
    const {onSend} = this.props;

    return (
      
      <Fragment>
        
        <Menu  onSend={onSend}/>
        <BlogPage blogs= {blogs} />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}