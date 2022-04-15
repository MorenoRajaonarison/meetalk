import React, {useState} from 'react'
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import AddFriendDialog from "./AddFriendDialog"


const styles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d'
}

const AddFriendBtn = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenAddFriend = () => {
    setIsDialogOpen(true)
  }

  const handleCloseAddFriend = () => {
    setIsDialogOpen(false)
  }
  return <>
    <CustomPrimaryButton
      additionalStyles={styles}
      label="Add friends"
      onClick={handleOpenAddFriend}
    />
    <AddFriendDialog
      isDialogOpen={isDialogOpen}
      closeDialogHandler={handleCloseAddFriend}
    />
  </>
}

export default AddFriendBtn
