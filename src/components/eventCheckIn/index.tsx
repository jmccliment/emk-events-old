import * as R from 'ramda';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const registrations = [
  { id: 1, studentId: 1, checkedIn: false },
  { id: 2, studentId: 2, checkedIn: false },
  { id: 3, studentId: 3, checkedIn: true },
  { id: 4, studentId: 4, checkedIn: true },
  { id: 5, studentId: 5, checkedIn: true },
  { id: 6, studentId: 6, checkedIn: true },
];

const students = [
  { id: 1, name: 'Abby Registered' },
  { id: 2, name: 'Billy Registered' },
  { id: 3, name: 'Clark Unregistered' },
  { id: 4, name: 'David Unregistered' },
  { id: 5, name: 'Emily Checkedin' },
  { id: 6, name: 'Frank Checkedin' },
  { id: 7, name: 'Sandra Notcoming' },
  { id: 8, name: 'Frank Notcoming' }
];

const checkedInStudents = students.filter(studentIsCheckedIn);
const notCheckedInStudents = students.filter(studentIsNotCheckedIn);

function studentIsCheckedIn(student: { id: number }): boolean {
  const checkedInStudentIds = registrations.filter((_) => _.checkedIn === true).map((_) => _.studentId);
  const isCheckedIn = checkedInStudentIds.indexOf(student.id) >= 0;
  return isCheckedIn;
}

function studentIsNotCheckedIn(student: { id: number }): boolean {
  return !studentIsCheckedIn(student);
}

// const unCheckedInStudents = R.innerJoin((student: any, registration: any) => registration.studentId === student.id, students, registrations);

const EventCheckIn = (props: any) => {
  return (
    <div>
      <h1>Da Belt Graduatoni!</h1>
      <div style={{ width: '40%', margin: '1em', display: 'inline-block' }}>
        <h2>Not checked in</h2>
        <ul>
          {notCheckedInStudents.map((student) => (
            <li>{student.name}<button onClick={() => alert(`${student.name} checked in.`)}>Check In</button></li>
          ))}
        </ul>
      </div>
      <div style={{ width: '40%', margin: '1em', display: 'inline-block' }}>
        <h2>Checked in</h2>
        <ul>
          {checkedInStudents.map((student) => (
            <li>{student.name}<button onClick={() => alert(`${student.name} checked out.`)}>Check Out</button></li>
          ))}
        </ul>
      </div>
      <div>
        <pre>{JSON.stringify(props, null, 2)}</pre>
      </div>
    </div>
  )
};

const mapStateToProps = (state: any) => ({
  students: state.firestore.students
});

const mapDispatchToProps = (dispatch: any) => ({
  // createEventType: (eventType) => dispatch(createEventType(eventType))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collecton: 'students' }
  ])
)(EventCheckIn);