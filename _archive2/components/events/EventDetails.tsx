import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { ListItem, ListItemText, ListSubheader, Divider } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import moment from 'moment';

const styles = {
  card: {
    maxWidth: 500,
    margin:'0 0 2em 2em'
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
  },500)
}

const EventSectionDetails = (props) => {
  const { startTime, endTime, lowAgeRange, highAgeRange, lowBeltRange, highBeltRange} = props;
  return (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  )
};

const EventDetails = (props) => {
  const { classes, image, name, match } = props;
  const section1 = { startTime: "5:00PM", endTime: "6:00PM", lowAgeRange: "14", highBeltRange: "Orange" }
  return (
    <div>
      <p>Event id: {match.params.eventId}</p>
      <EventSectionDetails {...section1} />
    </div>
  )
}

export default EventDetails;