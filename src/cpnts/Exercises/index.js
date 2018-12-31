import React, {Fragment} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
}

export default ({exercises}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([exercise, exercises]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{textTransform: 'capitalize'}}
            >
              {exercise}
            </Typography>
            <List component="ul">
              {exercises.map(({title}) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">안녕</Typography>
        <Typography variant="subheading" style={{marginTop: 20}}>
          좌측리스트에서 운동을 선택하세요!
        </Typography>
      </Paper>
    </Grid>
  </Grid>
)
