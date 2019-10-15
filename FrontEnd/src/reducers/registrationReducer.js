// import * as actionTypes from '../actions/actionTypes'

// const initialState = {
//   userName: '',
//   email: '',
//   password: '',
// };

// const registrationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.REGISTRATION_FAILED:
//       return {
//         ...state,
//       }
//     case actionTypes.ADD_USER:
//       return {
//         ...state,
//         data: {
//           ...state,
//           'username': state.data.username,
//           'email': state.data.username,
//           'password': state.data.username,
//         },
//         resolutions: {
//           ...state.resolutions,
//           [action.resID]: {
//             ...state.resolutions[action.resID],
//             resAdded: true
//           }
//         },
//       }
//     case actionTypes.REMOVE_RESOLUTION:

//       return {
//         ...state,
//         resources: {
//           ...state.resources,
//           'brain': state.resources['brain'] - action.budgetObject['brain'],
//           'energy': state.resources['energy'] - action.budgetObject['energy'],
//           'freetime': state.resources['freetime'] - action.budgetObject['freetime'],
//           'health': state.resources['health'] - action.budgetObject['health'],
//           'money': state.resources['money'] - action.budgetObject['money'],
//           'socialvalue': state.resources['socialvalue'] - action.budgetObject['socialvalue'],
//           'willpower': state.resources['willpower'] - action.budgetObject['willpower']
//         },
//         resolutions: {
//           ...state.resolutions,
//           [action.resID]: {
//             ...state.resolutions[action.resID],
//             resAdded: false
//           }
//         },
//       }
//     case actionTypes.FETCH_INSPIRATIONS_START:
//       return {
//         ...state,
//         insloading: true
//       }
//     case actionTypes.FETCH_INSPIRATIONS_SUCCESS:
//       return {
//         ...state,
//         inspirations: action.inspirations,
//         insloading: false
//       }
//     case actionTypes.FETCH_INSPIRATIONS_FAILED:
//       return {
//         ...state,
//         insloading: false
//       }

//     default:
//       return state
//   }
// }

// export default registrationReducer;
