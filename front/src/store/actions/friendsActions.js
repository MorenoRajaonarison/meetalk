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
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptInvitation: data => dispatch(acceptInvitation(data)),
    rejectInvitation: data => dispatch(rejectInvitation(data))
  }
}

export const setPendingFriendsInvitations = pendingFriendsInvitations => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations
  }
}

export const setFriends = friends => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends
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

const acceptInvitation = (data) => {
  return async dispatch => {
    const response = await api.acceptInvitation(data)
    if(response.e){
      dispatch(openAlertMsg(response.e?.response?.data))
    } else {
      dispatch(openAlertMsg('Invitation accepter'))
    }
  }
}

const rejectInvitation = (data) => {
  return async dispatch => {
    const response = await api.rejectInvitation(data)
    if(response.e){
      dispatch(openAlertMsg(response.e?.response?.data))
    } else {
      dispatch(openAlertMsg('Invitation rejeter'))
    }
  }
}