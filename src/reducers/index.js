import { combineReducers } from 'redux';

import commentsReducer from './comments';
import blogsReducer from './blogs';
import usersReducer from './users';
import userReducer from './user';

import messagesReducer from './messages';

export default combineReducers ({
  comments: commentsReducer,
  blogs: blogsReducer,
  users: usersReducer,
  user: userReducer,
  messages: messagesReducer,
})