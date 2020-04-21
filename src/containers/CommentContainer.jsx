import React, {Component, Fragment} from 'react';

import CommentPage from 'components/CommentPage';
import Menu from 'components/Menu';
import Comment from 'components/Comment';

export default class CommentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,

      comment: {},

      activeComment: false,
    }
  }

 

  componentDidMount() {
    const { match } = this.props;
    this.setState({loading: true});
    fetch(`https://jsonplaceholder.typicode.com/comments?id=${match.params.id}`).then((response) => response.json()).then((comment) => {
      this.setState({
        loading: false,
        comment,
      })
    })
    .catch(() => { this.setState({loading: false});  });
  }

  


 

  render() {
    const {loading, comment } = this.state;
    const { match } = this.props;


    return (
      
      <Fragment>
        
        
        <Comment name={comment.name} body={comment.body}  />
        {loading ? 'Loading' : ''}
      </Fragment>

    )
  }
}