import React from 'react';
import { IEvent } from '../../store/models';
import { createEvent } from '../../store/actions/eventActions';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';

interface ICreateEventState extends IEvent {
  month: number,
  day: number,
  year: number
  startTime: string
  endTime: string
}

class CreateEvent extends React.Component {
  state: ICreateEventState;
  constructor(props) {
    super(props);
    const date = moment(new Date()).add('days', 7);
    this.state = {
      id: '',
      name: '',
      start: undefined,
      end: undefined,
      locationName: '',
      eventTypeId: props.match.params.eventTypeId,
      startTime: '08:00',
      endTime: '14:00',
      month: date.month() + 1,
      day: date.date(),
      year: date.year()
    };
  }
  props: any;
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      start: moment(`${this.state.month}/${this.state.day}/${this.state.year} ${this.state.startTime}`).toDate(),
      end: moment(`${this.state.month}/${this.state.day}/${this.state.year} ${this.state.endTime}`).toDate()
    });
  }

  render() {

    return (
      <form autoComplete="off" style={{display:'flex'}}>
        <TextField id="name" label="Event Name" value={this.state.name} onChange={this.handleChange} />
        <TextField id="locationName" label="Location Name" value={this.state.locationName} onChange={this.handleChange} />
        <TextField id="month" label="Month" value={this.state.month} onChange={this.handleChange} type="number" />
        <TextField id="day" label="Day" value={this.state.day} onChange={this.handleChange} type="number" />
        <TextField id="year" label="Year" value={this.state.year} onChange={this.handleChange} type="number" />
        <TextField id="startTime" label="Start Time" value={this.state.startTime} onChange={this.handleChange} type="time" />
        <TextField id="endTime" label="End Time" value={this.state.endTime} onChange={this.handleChange} type="time" />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
  roles: state.firebase.profile.roles
});

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);