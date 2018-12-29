import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { ICheckIn } from './store/models/ICheckIn';
import { IStudent } from './store/models/IStudent';

import './App.css';


const students: IStudent[] = [
  { id: 1, lastName: 'Black', firstName: 'Billy' },
  { id: 2, lastName: 'Ryed', firstName: 'Roger' },
  { id: 3, lastName: 'Brownstone', firstName: 'Janet' },
  { id: 4, lastName: 'Greenspan', firstName: 'Alan' },
  { id: 5, lastName: 'White', firstName: 'Walter' },
  { id: 6, lastName: 'Yellowstone', firstName: 'Fred' },
  { id: 7, lastName: 'Blueth', firstName: 'Bobby' },
  { id: 8, lastName: 'White', firstName: 'Skyler' },
  { id: 9, lastName: 'White', firstName: 'Walter Jr' },
]



const app = (props: any) => {
  const { checkIns } = props;
  const checkedInIds = checkIns.map((_: ICheckIn) => _.studentId);
  const checkedInStudents = students.filter((_) => checkedInIds.indexOf(_.id) >= 0);
  const notCheckedInStudents = students.filter((_) => checkedInIds.indexOf(_.id) < 0);
  return (
    <main>
      <div style={{ width: '40%', display: 'inline-block', marginLeft: '5%', border: 'solid 1px red' }}>
        <ul>
          {notCheckedInStudents.map((student) => (<li>
            {student.firstName} {student.lastName}
          </li>))}
        </ul>
      </div>
      <div style={{ width: '40%', display: 'inline-block', marginLeft: '5%', border: 'solid 1px green' }}>
        <ul>
          {checkedInStudents.map((student) => (<li>
            {student.firstName} {student.lastName}
          </li>))}
        </ul>
      </div>
    </main>
  )
};

const mapStateToProps = (state: any, ownProps: any) => {
  const { checkIns } = state.firestore.data;

  return {
    checkIns,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'check-ins' }
  ])
)(app);
