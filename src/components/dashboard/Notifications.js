import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';

const styles = {
  card: {
    minWidth: 275,
    marginBottom: '.5rem',
    marginTop: '1rem',
  },
  title: {
    fontSize: 14
  },
};

const Notifications = ({ classes, notifications }) => {
  return (
    <Card className={classes.card}>
    <CardContent>
      <Typography variant="h6" color="textSecondary" gutterBottom>Notifications</Typography>
      <ul className="notifications">
        {notifications && notifications.map((item) => 
          <li key={item.id}>
            <Typography color="textSecondary">{item.user}</Typography>
            <Typography color="textPrimary">{item.content}</Typography>
            <Typography component="div">{moment(item.time.toDate()).fromNow()}</Typography>
          </li>)
        }
      </ul>
    </CardContent>
    </Card>
  )
}

export default withStyles(styles)(Notifications);