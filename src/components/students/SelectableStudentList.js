import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const StudentSummaryCard = (props) => {
  const { student } = props;

  return (
    <Card>
      <CardContent>
        <Typography>{student.fullName}</Typography>
      </CardContent>
      <CardActions>
        <button onClick={(e) => { e.preventDefault(); alert('foo'); }}>foo</button>
      </CardActions>
    </Card>
  );
}

const StudentListItem = (props) => {
  const { student, onSelect } = props;

  return (
    <ListItem button onClick={() => onSelect(student)}>
      <StudentSummaryCard student={student} />
    </ListItem>
  )
};


const StudentList = (props) => {
  const { students, onSelect } = props;

  return (
    <List>
      {students && students.map((student, index) => {
        return (
          <StudentListItem student={student} key={index} onSelect={onSelect} />
        );
      })}
    </List>
  )
}


const students = [
  { fullName: 'Abby Abson' },
  { fullName: 'Billy Brett' },
  { fullName: 'Charlie Chaplain' },
  { fullName: 'Dave Duchovney' },
  { fullName: 'Ebenezer Ecuban' },
];

class FilterableStudentList extends React.Component {

  onSelect = ({ fullName }) => alert(`${fullName} clicked.`);



  state = {
    filter: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });


  render() {
    const { filter } = this.state
    const filteredStudents = students.filter((student) => student.fullName.toUpperCase().indexOf(filter.toUpperCase()) >= 0);
    return (
      <div>
        <h2>boom</h2>
        <div><input type="text" id="filter" onChange={this.handleChange} /></div>
        {students && <StudentList onSelect={this.onSelect} students={filteredStudents} />}
      </div>
    )
  }
}

export default FilterableStudentList;
