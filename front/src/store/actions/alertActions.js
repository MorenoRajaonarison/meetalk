const alertActions = {
  OPEN_ALERT_MSG: 'ALERT.OPEN_ALERT_MSG',
  CLOSE_ALERT_MSG: 'ALERT.CLOSE_ALERT_MSG'
}

export const getActions = dispatch => {
  return {
    openAlertMsg: content => dispatch(openAlertMsg(content)),
    closeAlertMsg: () => dispatch(closeAlertMsg())
  }
}

export const openAlertMsg = content => {
  return {
    type: alertActions.OPEN_ALERT_MSG,
    content
  }
}

export const closeAlertMsg = () => {
  return {
    type: alertActions.CLOSE_ALERT_MSG
  }
}

export default alertActions