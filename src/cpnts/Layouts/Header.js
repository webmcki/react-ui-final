import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default (props) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        별이와 나 (2018.12.31~)
      </Typography>
    </Toolbar>
  </AppBar>
)
