import React from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import {connect} from 'react-redux'

const AlertNotif = () => {
  return (
    <Snackbar
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      onClose={()=>{}}
      // autoHideDuration={6000}
      open
    >
      <Alert severity='info'>
        message
      </Alert>
    </Snackbar>
  )
}

export default AlertNotif
