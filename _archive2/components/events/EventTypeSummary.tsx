import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import Edit from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import Zoom from '@material-ui/core/Zoom';

const styles = {
  card: {
    maxWidth: 500,
    margin: '0 0 2em 2em'
  },
  media: {
    height: 140
  },
  navLink: {
    textDecoration: 'none',
    fontFamily: 'Roboto',
  }
}

const Delay = (history, link) => (e) => {
  e.preventDefault()
  setTimeout(() => {
    history.push(link)
  }, 500)
}

const EventTypeSummary = (props) => {
  const { id, name, imageUrl, classes, upcomingEvents, history, profile } = props;
  const roles = profile && profile.roles || [''];
  const isAdmin = roles.filter(role => role === 'admin').length > 0;
  const initials = name.split(' ').reduce((previous, current) => `${previous}${current[0]}`, '').toUpperCase().substr(0, 2);
  return (
    <Zoom in={true}>
      <Card className={classes.card}>
        <CardHeader avatar={<Avatar>{initials}</Avatar>} action={isAdmin && <IconButton onClick={Delay(history, `/eventTypes/${id}`)}><Edit /></IconButton>} />
        <CardMedia className={classes.media} image={imageUrl} title={name} />
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <Divider />
          <Typography variant="subtitle1">{upcomingEvents && upcomingEvents.length ? "Upcoming Events" : "No upcoming events scheduled"}</Typography>
          <List>
            {upcomingEvents && upcomingEvents.map((event) => (
              <NavLink key={event.id} className={classes.navLink} to={`/events/${event.id}`} onClick={Delay(history, `/events/${event.id}`)}>
                <ListItem button>
                  <ListItemText primary={moment(event.date).calendar()} secondary={event.location} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={Delay(history, `/eventTypes/${id}/events/new`)}>Schedule event</Button>
          <Button size="small" color="secondary" onClick={Delay(history, `/eventTypes/${id}/events`)}>View event history</Button>
        </CardActions>
      </Card>
    </Zoom>
  )
}


const mapStateToProps = ({ firebase }) => ({
  profile: firebase.profile
});

export default withStyles(styles)(connect(mapStateToProps)(withRouter(EventTypeSummary)));