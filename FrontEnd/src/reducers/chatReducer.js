import * as actionTypes from '../actions/actionTypes';

const defaultState = {
  from: '',
  msg: '',
  topic: '', //room
  messages: new Array()
};

// const defaultState = {
//   general: [
//     { from: 'asd', msg: 'hi', },
//     { from: 'asdasd', msg: 'halo', },
//     { from: 'brbr', msg: 'whatev', },
//     { from: 'ret', msg: 'mnmn', },
//   ],
//   topic2323: [
//     { from: 'qqq', msg: '123', },
//     { from: 'www', msg: '234', },
//     { from: 'eee', msg: '345', },
//     { from: 'rrr', msg: '456', },
//   ]
// };

const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCOMINGMessage":
      console.log("action", action)
      return {
        ...state,
        messages: state.messages.concat(action.payload.message)
      }
    case actionTypes.RECIEVE_MESSAGE_START:
      return {
        ...state, [action.payload.topic]: [
          ...state[action.payload.topic],
          {
            from: action.payload.from,
            msg: action.payload.msg,
          }
        ]
      }
    default:
      return state;
  }
};

export default chatReducer;
