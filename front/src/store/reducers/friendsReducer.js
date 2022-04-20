import {friendsActions} from "../actions/friendsActions"

const initState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUser: []
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case friendsActions.SET_PENDING_FRIENDS_INVITATIONS:
      return {
        ...state,
        pendingFriendsInvitations: action.pendingFriendsInvitations
      }
    case friendsActions.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      }
    case friendsActions.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUser: action.onlineUser
      }
    default: return state
  }
}

export default reducer