const defaultState = {
  query: '',
};

const dashboardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHFIELD':
      return Object.assign({}, state, {
        query: action.payload,
      });
    default:
      return state;
  }
};

export default dashboardReducer;
