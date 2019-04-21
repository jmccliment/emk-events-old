import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { RedirectIfUserIsNotSignedIn } from '../routing/RouteGuard';

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

const data = {
  event: {
    name: 'April 2019 Belt Graduation',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reprehenderit obcaecati officiis perferendis eveniet soluta, amet odio aperiam tenetur. Voluptates ducimus aperiam perspiciatis quia ex temporibus dignissimos. Quae, excepturi pariatur?',
    date: '04/12/2019',
    locations: [
      {
        name: 'ALA Mesa',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas blanditiis nulla porro mollitia officiis labore sint neque eveniet nemo itaque nihil, aspernatur dolor, magni odio, veniam tempore optio aut quis?',
        address: {
          street: '1313 Mockingbird Ln',
          city: 'Mesa',
          state: 'AZ',
          postalCode: '12345'
        },
        sections: [
          {
            name: 'Tiny Tigers',
            description: '3-4 year olds',
            start: '10:00 AM',
            end: '11:00 AM',
            participants: [
              { name: 'Adam Ant' },
              { name: 'Billy Bobson' },
              { name: 'Charlie Currant' },
            ],
          },
          {
            name: 'Little Dragons',
            description: '5-6 year olds',
            start: '11:00 AM',
            end: '12:00 AM',
            participants: [
              { name: 'David Duchovney' },
              { name: 'Elliot Ellison' },
              { name: 'Frank Burns' },
            ],
          },
          {
            name: 'Basic/Leadership',
            description: '7-9 year olds',
            start: '12:00 AM',
            end: '1:00 PM',
            participants: [
              { name: 'George Gungle' },
              { name: 'Harry Houdini' },
              { name: 'India Indiana' },
            ],
          },
          {
            name: 'Basic/Leadersip',
            description: '10-13 year olds',
            start: '1:00 PM',
            end: '2:00 PM',
            participants: [
              { name: 'Jerry Jones' },
              { name: 'Keanu Killmonger' },
              { name: 'Larry Lavin' },
            ],
          },
          {
            name: 'Teen/Adult',
            description: '14+ year olds',
            start: '2:00 PM',
            end: '3:00 PM',
            participants: [
              { name: 'Mary Marone' },
              { name: 'Nancy Nova' },
              { name: 'Otto Octavious' },
            ],
          },
        ],
      },
    ],
  },
};


const Student = ({ name }) => (
  <div>{name}</div>
)

class StudentList extends React.Component {
  state = {

  };

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { students } = this.props;
    return (
      <ul>
        {students && students.map((student) => (
          <li>
            <Student name={student.name} />
          </li>
        ))}
        <li>
          BOOYA!
        </li>
      </ul>
    );
  }
}

const Section = ({ name, start, end, description, participants }) => (
  <div>
    <h1>{name}</h1>
    <div>{start} &mdash; {end}</div>
    <p>{description}</p>
    <StudentList students={participants} />
  </div>
);

const EventLocation = ({ name, address, description, sections }) => (
  <div>
    <h1>{name}</h1>
    <div>{address.city}, {address.state}</div>
    <p>{description}</p>
    <button>sign in page</button>
    <ul>
      {sections.map((section) => (
        <li>
          <Section name={section.name} start={section.start} end={section.end} description={section.description} participants={section.participants} />
        </li>
      ))}
    </ul>
  </div>
)
const EventDetails = (props) => {
  const { classes, event } = props;

  if (event && event.title) {
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
        <div style={{ border: '1px solid red' }}>

          <h1>{data.event.name}</h1>
          <p>{data.event.description}</p>
          <ul>
            {data.event.locations.map((location) => (
              <li>
                <EventLocation name={location.name} address={location.address} description={location.description} sections={location.sections} />
              </li>
            ))}
          </ul>
        </div>
        {/* <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {event.title}
            </Typography>
            <Typography component="p">{event.content}</Typography>
          </CardContent>
          <CardActions>
            <Typography component="div">{event.authorFirstName} {event.authorLastName}</Typography>
            <Typography component="div">{event && event.createdAt && event.createdAt.toString && event.createdAt.toString()}</Typography>
          </CardActions>
        </Card> */}
      </RedirectIfUserIsNotSignedIn>
    );
  } else {
    return (
      <RedirectIfUserIsNotSignedIn to='/signin'>
        <span>loading...</span>
      </RedirectIfUserIsNotSignedIn>
    );
  }
}

EventDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { events } = state.firestore.data;
  const event = events ? events[id] : {};
  return {
    event
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'events' }])
)(EventDetails);