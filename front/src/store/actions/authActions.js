import * as api from '../../api'
import {openAlertMsg} from "./alertActions"

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS'
}

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) => dispatch(register(userDetails, history))
  }
}

const setUserDetails = userDetails => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails
  }
}

const login = (userDetails, history) => {
  return async (dispatch) => {
    const res = await api.login(userDetails)
    if(res.error){
      console.log(res)
      dispatch(openAlertMsg(res?.e?.response?.data))
    } else {
      const {userDetails} = res?.data
      localStorage.setItem('user', JSON.stringify(userDetails))
      dispatch(setUserDetails(userDetails))
      history.push('/dashboard')
    }
  }
}

const register = (userDetails, history) => {
  return async (dispatch) => {
    const res = await api.register(userDetails)
    if(res.error){
      dispatch(openAlertMsg(res?.e?.response?.data))
    } else {
      const {userDetails} = res?.data
      localStorage.setItem('user', JSON.stringify(userDetails))
      dispatch(setUserDetails(userDetails))
      history.push('/dashboard')
    }
  }
}