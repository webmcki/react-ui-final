import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

export default ({muscles}) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab label="전부" />
      {muscles.map((muscle) => (
        <Tab label={muscle} />
      ))}
    </Tabs>
  </Paper>
)
