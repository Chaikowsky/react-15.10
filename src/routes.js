import HomeContainer from 'containers/HomeContainer';
import CommentsContainer from 'containers/CommentsContainer';
import CommentContainer from 'containers/CommentContainer';

export default[
  {
    path: '/',
    exact: true,
    component: HomeContainer,
  },
  {
    path: '/comments',
    exact: true,
    component: CommentsContainer,
  },
  {
    path: '/comments/:id',
    exact: true,
    component: CommentContainer,
  },

]