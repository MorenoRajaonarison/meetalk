import React from 'react'
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"

const styles = {
  marginTop: '10px',
  marginLeft: '5px',
  width: '80%',
  height: '30px',
  background: '#3ba55d'
}

const AddFriendBtn = () => {

  const handleOpenAddFriend = () => {

  }
  return <>
    <CustomPrimaryButton
      additionalStyles={styles}
      label="Add friends"
      onClick={handleOpenAddFriend}
    />
  </>
}

export default AddFriendBtn
