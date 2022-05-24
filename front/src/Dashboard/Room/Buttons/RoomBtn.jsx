import React from 'react'
import {connect} from 'react-redux'
import {styled} from "@mui/system"
import ScreenShareBtn from './ScreenShareBtn'
import MicroBtn from './MicroBtn'
import CloseRoomBtn from './CloseRoomBtn'
import CameraBtn from './CameraBtn'
import {getActions} from '../../../store/actions/roomActions'

const MainContainer = styled('div')({
  height: '15%',
  width: '100%',
  backgroundColor: '#5865f2',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: "center"
})

const RoomBtn = (props) => {
  const {localStream} = props
  return (
    <MainContainer>
      <ScreenShareBtn {...props}/>
      <MicroBtn localStream={localStream}/>
      <CameraBtn localStream={localStream}/>
      <CloseRoomBtn/>
    </MainContainer>
  )
}

const mapStateToProps = ({room}) => {
  return {...room}
}
const mapActionToProps = dispatch => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(mapStateToProps,mapActionToProps)(RoomBtn)
