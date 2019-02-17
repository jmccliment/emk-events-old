import React from 'react';
import StudentList from '../students/StudentList';

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { registerStudentForEvent, signStudentInForEvent } from '../../store/events'

const ranks = ['white', 'yellow', 'orange', 'purple', 'blue', 'green', 'brown', 'red', 'second-red', 'black'];

const addFullName = () => (student) => ({ ...{ fullName: `${student.firstName} ${student.lastName}` }, ...student });
const orderStudents = () => (lhs, rhs) => ranks.indexOf(lhs.rank) - ranks.indexOf(rhs.rank);

const SignIn = (props) => {
  const { students, registerStudentForEvent, eventId, eventRegistrations } = props;
  const registeredStudentIds = eventRegistrations && eventRegistrations.filter((r) => r.eventId === eventId).map((r) => r.studentId);
  const registeredStudents = students && eventRegistrations && students.filter((s) => registeredStudentIds.indexOf(s.id) >= 0);
  const unregisteredStudents = students && eventRegistrations && students.filter((s) => registeredStudentIds.indexOf(s.id) < 0);
  return (
    <div>
      <hr />
      <pre>{JSON.stringify(registeredStudents, null, 2)}</pre>
      <hr />
      <pre>{JSON.stringify(unregisteredStudents, null, 2)}</pre>
      <hr />
      <h2>TEST</h2>
      <button onClick={() => registerStudentForEvent(eventId, 12345)}>foo</button>
      <h3>Sign in to the event</h3>
      <StudentList students={unregisteredStudents && unregisteredStudents.map(addFullName()).sort(orderStudents())} onClick={({ id }) => registerStudentForEvent(eventId, id)} buttonListItem={true} hideFilterBox={true} />
      <hr />
      <h3>Sign out of the event</h3>
      <StudentList students={registeredStudents && registeredStudents.map(addFullName()).sort(orderStudents())} onClick={({ fullName }) => alert(fullName)} buttonListItem={true} />
    </div >
  );
};

const mapStateToProps = (state, ownState) => {
  return {
    students: state.firestore.ordered.students,
    eventId: ownState.match.params.id,
    eventRegistrations: state.firestore.ordered.eventRegistrations
  }
};

const mapDispatchToProps = (dispatch) => ({
  registerStudentForEvent: (event, student) => dispatch(registerStudentForEvent(event, student)),
  signStudentInForEvent: (registrationId) => dispatch(signStudentInForEvent(registrationId))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'students' },
    { collection: 'eventRegistrations' }
  ])
)(SignIn);
