import {handleActions} from 'redux-actions';

import {messageReceived, messageLoadCompleted }  from "actions/messages";


const initialState = {
  entities: [],
  
};

export default handleActions({
  [messageReceived]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat([action.payload]),
    };
  },
  [messageLoadCompleted]: (state, action) => {
    return {
      ...state,
      entities: state.entities.concat(action.payload),

    };
  },
}, initialState);