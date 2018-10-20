import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux";
import * as actions from "../actions";

class CheckIn extends Component {
  static propTypes = {
    students: PropTypes.object.isRequired
  };

  state = {
    firstName: '',
    lastName: ''
  };

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };

  handleFormSubmit = event => {
    const { firstName, lastName } = this.state;
    const { addStudent } = this.props;

    event.preventDefault();
    addStudent({ firstName, lastName });
    this.setState({ firstName: '', lastName: ''});
  };

  componentWillMount() { this.props.fetchStudents(); }

  render() {
    const { firstName, lastName } = this.state;
    // let { students } = this.props;

    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input 
              value={firstName}
              onChange={this.handleFirstNameChange}
              id="firstName"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input
              value={lastName}
              onChange={this.handleLastNameChange}
              id="lastName"
              type="text"
            />
          </div>
          <div>
            <Button type="submit" variant="contained" color="primary">Check In</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({students}) =>
{
  return {
    students
  };
};

export default connect(mapStateToProps, actions)(CheckIn);