import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Loading started');
export const loadCompleted = createAction('[Comments] Loading completed');
export const loadFailed = createAction('[Comments] Loading failed');

export const load = (dispatch) => {
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => response.json()).then((users) => {
    dispatch(loadCompleted(users));
    
  })
  .catch(() => {dispatch(loadFailed());  });
};