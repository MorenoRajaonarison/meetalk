import React from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import {connect} from 'react-redux'
import {getActions} from "../../store/actions/alertActions"

const AlertNotif = ({showMsg,closeAlertMsg, msgContent}) => {
  return (
    <Snackbar
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      open={showMsg}
      onClose={closeAlertMsg}
      autoHideDuration={6000}
    >
      <Alert severity='info'>
        {msgContent}
      </Alert>
    </Snackbar>
  )
}

const mapStoreStateToProps = ({alert}) => {
  return {
    ...alert
  }
}

const mapActionsToProps = dispatch => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotif)
