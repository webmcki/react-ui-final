import React from 'react'
import Grid from '@material-ui/core/Grid'

import LeftPane from './LeftPane'
import RightPane from './RightPane'

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10
  }
}

export default (props) => (
  <Grid container>
    <Grid item sm>
      <LeftPane style={style.Paper} />
    </Grid>
    <Grid item sm>
      <RightPane style={style.Paper} />
    </Grid>
  </Grid>
)
