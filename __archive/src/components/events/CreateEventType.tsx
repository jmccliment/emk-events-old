import React from 'react';
import { connect } from 'react-redux';
import { createEventType } from '../../store/actions/eventTypeActions';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class CreateEventType extends React.Component {
  state = {
    name: '',
    imageUrl: ''
  }
  props: any;
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted', this.state);
    this.props.createEventType(this.state);
    this.props.history.push('/eventTypes');
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({name: '', imageUrl: ''});
  }

  render() {
    return (
      <form autoComplete="off">
        <div>
          <TextField id="name" label="Event Type Name" value={this.state.name} onChange={this.handleChange} margin="normal" />
        </div>
        <div>
          <TextField id="imageUrl" label="Image Url" value={this.state.imageUrl} onChange={this.handleChange} margin="normal" />
          <img src={this.state.imageUrl} alt="image preview" />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
          <Button variant="contained" color="secondary" onClick={this.handleCancel}>Cancel</Button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
  roles: state.firebase.profile.roles
});

const mapDispatchToProps = (dispatch) => ({
  createEventType: (eventType) => dispatch(createEventType(eventType))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventType);
