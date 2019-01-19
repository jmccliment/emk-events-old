import React from 'react';
import SSL from '../students/SelectableStudentList';

const students = [
  { fullName: 'Abby Abson' },
  { fullName: 'Billy Brett' },
  { fullName: 'Charlie Chaplain' },
  { fullName: 'Dave Duchovney' },
  { fullName: 'Ebenezer Ecuban' },  
];


const Student = (props) => {
  const { student } = props;

  return (
    <div>
      <span>{student.fullName}</span>
    </div>
  )
};


const StudentList = (props) => {
  const { students } = props;

  return (
    <div>
      {students && students.map((student, index) => {
        return (
          <Student student={student} key={index} />
        );
      })}
    </div>
  )
}

class FilterableStudentList extends React.Component {
  
  state = {
    filter: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });


  render() {
    const { filter } = this.state
    return (
      <div>
        <h2>boom</h2>
        <div><input type="text" id="filter" onChange={this.handleChange}/></div>
        {students && <StudentList students={students.filter((student) => student.fullName.toUpperCase().indexOf(filter.toUpperCase()) >= 0)} />}
      </div>
    )
  }
}

const asdf = () => {
  return (
    <SSL students={students} />
  );
};

export default asdf;