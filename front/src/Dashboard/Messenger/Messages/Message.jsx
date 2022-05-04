import React from 'react'
import {styled} from'@mui/system'
import Avatar from '../../../shared/components/Avatar'
import {Typography} from "@mui/material"

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px'
})

const AvatarContainer = styled('div')({
  width: '70px'
})

const MessageContainer = styled('div')({
  display:'flex',
  flexDirection: 'column'
})

const MessageContainerSender = styled('div')({
  display:'flex',
  flexDirection: 'column',
  marginLeft: 'auto'
})

const MessageContent = styled('div')({
  color:'#dcddde'
})

const SameAuthorMessageContent = styled('div')({
  color: '#dcddde',
  width: '97%'
})

const SameAuthorMessageContentSender = styled('div')({
  display: 'flex',
  color: '#dcddde',
  width: '97%'
})

const SameAuthorMessageText = styled('span')({
  marginLeft: '70px'

})

const SameAuthorMessageTextSender = styled('span')({
  marginLeft: 'auto'
})

const Message = ({content,sameAuthor,sameDay,username,date,senderName}) => {
  if(sameAuthor && sameDay){
    if(username === senderName){
      return <SameAuthorMessageContentSender>
        <SameAuthorMessageTextSender>{content}</SameAuthorMessageTextSender>
      </SameAuthorMessageContentSender>
    }
    return <SameAuthorMessageContent>
      <SameAuthorMessageText>{content}</SameAuthorMessageText>
    </SameAuthorMessageContent>
  }
  if(username === senderName){
    return <MainContainer>
      <MessageContainerSender>
        <Typography
          style={{fontSize: '11px', color: '#fff'}}>{username} {' '}
          <span style={{fontSize: '12px', color: '#72767d'}}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainerSender>
    </MainContainer>
  }
  return <MainContainer>
      <AvatarContainer>
        <Avatar username={username}/>
      </AvatarContainer>
      <MessageContainer>
        <Typography
          style={{fontSize: '11px', color: '#fff'}}>{username} {' '}
          <span style={{fontSize: '12px', color: '#72767d'}}>{date}</span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
  </MainContainer>
}

export default Message
