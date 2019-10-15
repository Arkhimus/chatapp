import * as actionTypes from './actionTypes';
import axios from 'axios';

export const registrationStart = () => {
  return {
    type: actionTypes.REGISTRATION_START,
  }
}

export const registrationSuccess = () => {
  return {
    type: actionTypes.REGISTRATION_SUCCESS,
  }
}

export const registrationFailed = (error) => {
  return {
    type: actionTypes.REGISTRATION_FAILED,
    error: error,
  }
}

export const doRegistration = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: "REGISTRATION_STARTED" });
    axios.post("/api/register", { data: data })
      .then((res) => {
        dispatch({ type: "REGISTRATION__SUCCEEDED", payload: res.data })
      })
      .catch(err => {
        dispatch({ type: "REGISTRATION__FAILED", error: err })
      })
  };
}