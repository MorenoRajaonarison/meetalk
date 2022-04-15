import React, {useState, useEffect} from 'react'
import Typography from '@mui/material/Typography'
import DialogContentText from '@mui/material/DialogContentText'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import {validateMail} from '../../shared/Utils/validators'
import InputWithLabel from "../../shared/components/InputWithLabel";

const AddFriendDialog = ({isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {}}) => {
  const [mail, setEmail] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  const handleSendInvitation = () => {
    //TODO: envoyer un invitation au serveur
  }

  const handleCloseDialog = () => {
    closeDialogHandler()
    setEmail('')
  }

  useEffect(() => {
    setIsFormValid(validateMail(mail))
  }, [mail, setIsFormValid])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Inviter un  ami</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Inviter un ami avec son email</Typography>
          </DialogContentText>
          <InputWithLabel
            label='Mail'
            type='text'
            value={mail}
            setValue={setEmail}
            placeholder='Entrez un adresse email'
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label='Envoyer'
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px'
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddFriendDialog
