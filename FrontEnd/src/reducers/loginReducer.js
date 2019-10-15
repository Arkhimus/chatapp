const defaultState = {
  props: '',
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return Object.assign({}, state, {
        onClick: action,
      });
    default:
      return state;
  }
};

export default loginReducer;
