import React from 'react'
import {Tooltip} from "@mui/material";
import Avatar from "../../shared/components/Avatar"
import Button from "@mui/material/Button"
import * as roomHandler from '../../Rtc/roomHandler'

const ActiveRoomBtn = ({creatorUsername,amountOfParticipants,isUserInRoom,roomId}) => {
  const handleJoinActiveRoom = () => {
    if(amountOfParticipants < 4){
      roomHandler.joinRoom(roomId)
    }
  }

  const activeRoomBtnDisabled = amountOfParticipants > 3
  const roomTitle = `Createur: ${creatorUsername}. Connecter: ${amountOfParticipants}`
  return (
    <Tooltip title={roomTitle}>
      <div>
        <Button
          disabled={activeRoomBtnDisabled || isUserInRoom}
          onClick={handleJoinActiveRoom}
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
          <Avatar username={creatorUsername}/>
        </Button>
      </div>
    </Tooltip>
  )
}

export default ActiveRoomBtn
