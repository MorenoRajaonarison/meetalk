import store from './../../store/store'
import {setMessages} from '../../store/actions/chatActions'

export const updateDirectChatHistoryIfActive = data => {
  const {participants, messages} = data
  console.log(data)
  // trouver l'id a partir du token et l'user active
  const receiverId = store.getState().chats.chosenChatDetails?.id
  const userId = store.getState().auth.userDetails._id


  if(receiverId && userId){
    const usersInConversation = [receiverId, userId]
    updateChatHistoryIfSameConversationActive({
      participants,usersInConversation, messages
    })
  }
}

const updateChatHistoryIfSameConversationActive = ({participants,usersInConversation, messages}) => {
  const result = participants.every(function(participantId){
    return usersInConversation.includes(participantId)
  })
  if(result){
    store.dispatch(setMessages(messages))
  }
}