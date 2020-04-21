import { createAction } from 'redux-actions';
import io from 'socket.io-client';

export const messageReceived = createAction('[Message] Received');
export const messageLoadCompleted = createAction('[Message] Load completed');

const socket = io('http://localhost:3000');

export const send = (message) => {
  socket.emit('message', message);
};

export const listen = () => (dispatch) => {
  socket.on('message', (message) => {
    dispatch(messageReceived(message));
  });
};

export const load = () => (dispatch) => {
  fetch('http://localhost:3000/messages')
  .then((response) => response.json())
  .then((messages) => {
    //console.log('Try one', messages);
    dispatch(messageLoadCompleted(messages));
  });
}