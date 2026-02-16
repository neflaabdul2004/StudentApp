import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h3><i>StudentApp</i></h3>&nbsp;&nbsp;
          <Link to='/fr'>
          <Button variant="contained" color='secondary'>Add</Button>
          </Link>&nbsp;&nbsp;
          <Link to='tab'>
          <Button variant="contained" color="secondary">View</Button>
          </Link>
        </Toolbar>
      </AppBar><br /><br /><br />
    </div>
  )
}

export default NavBar