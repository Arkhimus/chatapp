
const defaultState = {
  from: '',
  msg: '',
  topic: '', //room
  messages: [],
};

const chatReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCOMINGMessage":
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      }
    case "INCOMINGMessages":
      console.log(action)
      return {
        ...state,
        messages: action.payload
      }
    default:
      return state;
  }
};

export default chatReducer;
