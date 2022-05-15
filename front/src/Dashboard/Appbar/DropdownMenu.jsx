import React, {useState} from "react"
import {connect} from 'react-redux'
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { IconButton } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import {logout} from "../../shared/Utils/auth"
import {getActions} from '../../store/actions/roomActions'

const BasicMenu = ({audioOnly, setAudioOnly}) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const open = Boolean(anchorEl)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleAudiotoggle = () => {
    setAudioOnly(!audioOnly)
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudiotoggle}>
          {audioOnly ? 'Audio seulement': 'Audio et Video'}
        </MenuItem>
      </Menu>
    </div>
  )
}

const mapStateToProps = ({room}) => {
  return {
    ...room
  }
}

const mapActionsToProps = dispatch => {
  return{
    ...getActions(dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(BasicMenu)