import React, {useState} from 'react'
import {styled} from '@mui/system'
import {connect} from 'react-redux'

const MainContainer = styled('div') ({
  height: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const Input = styled('input')({
  backgroundColor: '#2f3136',
  width: '98%',
  height: '44px',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px'
})

const NewMessageInput = ({chosenChatDetails}) => {
  const [message, setMessage] = useState('')

  const handleChange = e => {
    setMessage(e.target.value)
  }

  const handleKeyChange = e => {
    if(e.key === 'Enter'){
      handleSendMessage()
    }
  }

  const handleSendMessage = () => {
    console.log('sending message')
    setMessage('')
  }
  return <MainContainer>
    <Input
      placeholder={`Ècrire un message a ${chosenChatDetails.name}`}
      value={message}
      onChange={handleChange}
      onKeyDown={handleKeyChange}
    />
  </MainContainer>
}

const mapStoreStateToProps = ({chats}) => {
  return {
    ...chats
  }
}

export default connect(mapStoreStateToProps)(NewMessageInput)