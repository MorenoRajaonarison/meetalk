import React, {useRef, useEffect} from 'react'
import {styled} from '@mui/system'
import MessagesHeader from './MessagesHeader'
import {connect} from 'react-redux'

const MainContainer = styled('div')({
  height: 'calc(100% - 60px)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

const Messages = ({chosenChatDetails, messages}) => {
  return <MainContainer>
      <MessagesHeader name={chosenChatDetails?.name} />
    </MainContainer>
}

const mapStoreStateToProps = ({chats}) => {
  return ({
    ...chats
  })
}

export default connect(mapStoreStateToProps)(Messages)
