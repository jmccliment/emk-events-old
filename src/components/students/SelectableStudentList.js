import React from 'react';
import StudentList from './StudentList';
import { log } from '../../logging/Logger';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const students = [
  { firstName: 'Abby', lastName: 'Abson', rank: 'white' },
  { firstName: 'Billy', lastName: 'Brett', rank: 'yellow' },
  { firstName: 'Charlie', lastName: 'Chaplain', rank: 'orange' },
  { firstName: 'Dave', lastName: 'Duchovney', rank: 'purple' },
  { firstName: 'Ebenezer', lastName: 'Ecuban', rank: 'blue' },
  { firstName: 'Frank', lastName: 'Furter', rank: 'green' },
  { firstName: 'Gorilla', lastName: 'Grodd', rank: 'brown' },
  { firstName: 'Harry', lastName: 'Houdini', rank: 'red' },
  { firstName: 'Isaac', lastName: 'Isaacson', rank: 'second-red' },
  { firstName: 'Jumping', lastName: 'Jackflash', rank: 'black', grade: '1st' },
  { firstName: 'Klif', lastName: 'Kingsbury', rank: 'black', degree: '1st', grade: '1st' },
  { firstName: 'Larry', lastName: 'Lovell', rank: 'black', degree: '2nd', grade: '3rd' },

];

const ranks = ['white', 'yellow', 'orange', 'purple', 'blue', 'green', 'brown', 'red', 'second-red', 'black'];

const onClick = ({ fullName }) => log(`${fullName} clicked.`);

const addFullName = () => (student) => ({ ...{ fullName: `${student.firstName} ${student.lastName}` }, ...student });
const orderStudents = () => (lhs, rhs) => ranks.indexOf(lhs.rank) - ranks.indexOf(rhs.rank);
const FSL = ({ students }) => <>{students && <StudentList students={students.map(addFullName()).sort(orderStudents())} onClick={onClick} buttonListItem={true} />}</>;

const mapStateToProps = (state) => {
  return {
    students: state.firestore.ordered.students
  }
};

const mapDispatchToProps = () => ({});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'students' }
  ])
)(FSL);

