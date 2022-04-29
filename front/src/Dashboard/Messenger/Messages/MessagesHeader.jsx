import React from 'react'
import {styled} from '@mui/system'
import Avatar from '../../../shared/components/Avatar'
import {Typography} from "@mui/material"

const MainContainer = styled('div')({
  width: '98%',
  display: 'column',
  marginTop: '10px',
})

const MessagesHeader = ({name= ''}) => {
  return <MainContainer>
      <Avatar large username={name}/>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          color: '#fff',
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: '#b9bbbe',
          marginLeft: '5px',
          marginRight: '5px'
        }}
      >
        Debut du conversation
      </Typography>
    </MainContainer>
}

export default MessagesHeader
