import alertActions from "../actions/alertActions"

const initState = {
  showMsg: false,
  msgContent: null
}

const reducer = (state=initState, action)=> {
  switch (action.type) {
    case alertActions.OPEN_ALERT_MSG:
      return {
        ...state,
        showMsg: true,
        msgContent: action.content
      }
    case alertActions.CLOSE_ALERT_MSG:
      return {
        ...state,
        showMsg: false,
        msgContent: null
      }
    default:
      return state
  }
}

export default reducer