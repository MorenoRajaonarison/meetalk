import React from 'react'
import Button from '@mui/material/Button'
import {AddIcCall} from '@mui/icons-material'

const CreateRoomButton = () => {
  const createNewRoomHandler = () => {}
  return (
    <Button
      onClick={createNewRoomHandler}
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865f2',
      }}
    >
      <AddIcCall />
    </Button>
  )
}

export default CreateRoomButton
