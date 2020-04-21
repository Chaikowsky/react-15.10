import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Loading started');
export const loadCompleted = createAction('[Comments] Loading completed');
export const loadFailed = createAction('[Comments] Loading failed');

export const load = (dispatch, id) => {
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((response) => response.json()).then((user) => {
    dispatch(loadCompleted(user));
    
  })
  .catch(() => {dispatch(loadFailed());  });
};