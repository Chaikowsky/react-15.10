import HomeContainer from 'containers/HomeContainer';
import CommentsContainer from 'containers/CommentsContainer';
import CommentContainer from 'containers/CommentContainer';
import BlogContainer from 'containers/BlogContainer';
import UserContainer from 'containers/UserContainer';
import UContainer from 'containers/UContainer';
import MessagesContainer from 'containers/MessagesContainer';

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
  {
    path: '/blogs',
    exact: true,
    component: BlogContainer,
  },
  {
    path: '/blogs/:id',
    exact: true,
    component: BlogContainer,
  },
  {
    path: '/users',
    exact: true,
    component: UserContainer,
  },
  {
    path: '/users/:userId',
    exact: true,
    component: UContainer,
  },
  {
    path: '/messages',
    exact: true,
    component: MessagesContainer,
  },



]