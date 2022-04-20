import {openAlertMsg} from "./alertActions"
import * as api from '../../api'

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS'
}

export const getActions = dispatch => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler))
  }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async dispatch => {
    const response = await api.sendFriendsInvitation(data)
    if(response.e){
      dispatch(openAlertMsg(response.e?.response?.data))
    } else {
      dispatch(openAlertMsg('Invitation has been sent'))
      closeDialogHandler()
    }
  }
}