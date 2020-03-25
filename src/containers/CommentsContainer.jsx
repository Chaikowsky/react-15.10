import React, {Component} from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
      page: 1,
    }
  }

  loadComments = () => {
    const { page } = this.state;
    this.setState({loading: true});
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=10&_page= ${ page }').then((response) => response.json()).then((comments) => {
      this.setState({
        loading: false,
        comments: this.state.comments.concat(comments),
      })
    })
    .catch(() => { this.setState({loading: false});  });
  }

  componentDidMount() {
    this.loadComments();
  }

  render() {
    const { loading, comments } = this.state;

    return (
      loading ? 'Loading' : <CommentsList comments= {comments} />
    )
  }
}