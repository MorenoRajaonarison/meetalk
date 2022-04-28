import React from 'react'
import {styled} from '@mui/system'
import {Typography} from '@mui/material'

const WelcomeMessage = () => {
  const Wrapper = styled('div')({
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
  return (
    <Wrapper>
      <Typography
        variant='h6'
        sx={{color: 'white'}}
      >Choisir une conversation</Typography>
    </Wrapper>
  )
}

export default WelcomeMessage
