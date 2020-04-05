import React, {Component, Fragment} from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
      page: 0,
    }
  }

  loadComments = () => {
    this.setState({page: this.state.page + 1})
    const { page } = this.state;
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&_page= ${ page }`).then((response) => response.json()).then((comments) => {
      this.setState({
        loading: false,
        comments: this.state.comments.concat(comments),
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
    const { loading, comments } = this.state;

    return (
      <Fragment>
        <CommentsList comments= {comments} />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}