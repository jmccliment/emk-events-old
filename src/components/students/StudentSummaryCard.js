import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    width: '100%'
  }
};

const StudentSummaryCard = ({ student, children, classes }) => {

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="title" color="textPrimary" gutterBottom>{student.fullName}</Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(StudentSummaryCard);
