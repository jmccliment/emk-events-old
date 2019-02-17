import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { TextField } from '@material-ui/core';

const styles = {
  list: {
    width: '40rem',
    marginLeft: '2rem',
    marginTop: '.5rem',
  },
  listItem: {
    width: '100%',
  },
  white: {
    color: 'black',
    backgroundColor: '#f0f0f0',
    border: '2px solid #f0f0f0',
  },
  yellow: {
    color: 'black',
    backgroundColor: 'yellow',
    border: '2px solid yellow',
  },
  orange: {
    color: 'black',
    backgroundColor: 'orange',
    border: '2px solid orange',
  },
  purple: {
    color: 'white',
    backgroundColor: 'purple',
    border: '2px solid purple',
  },
  blue: {
    color: 'white',
    backgroundColor: 'blue',
    border: '2px solid blue',
  },
  green: {
    color: 'white',
    backgroundColor: 'green',
    border: '2px solid green',
  },
  brown: {
    color: 'white',
    backgroundColor: 'brown',
    border: '2px solid brown',
  },
  red: {
    color: 'white',
    backgroundColor: 'red',
    border: '2px solid red',
  },
  'second-red': {
    color: 'black',
    backgroundColor: 'red',
    border: '2px solid black',
  },
  black: {
    color: 'white',
    backgroundColor: 'black',
    border: '2px solid black',
  }
};

function capitalizeFirstLetter(string) {
  const words = string.split('-');
  if (words.length > 1) {
    return words.map(capitalizeFirstLetter).join(' ')
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

const rdgText = ({ rank, degree, grade }) => {
  const rankText = `${capitalizeFirstLetter(rank)} belt`;
  const degreeText = (degree && `${degree} degree`) || '';
  const gradeText = (grade && `${grade} grade`) || '';
  const secondaryText = `${degreeText} ${gradeText} `;
  const text = `${secondaryText}${rankText}`;
  return text;
}

const StudentListItem = withStyles(styles)(({ student, onClick, children, buttonListItem, classes }) => {
  return (
    <ListItem button={buttonListItem} onClick={() => onClick(student)} className={classes.listItem}>
      <ListItemAvatar>
        <Avatar className={classes[student.rank]}>{student.firstName[0]}{student.lastName[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={student.fullName} secondary={rdgText(student)}></ListItemText>
    </ListItem>
  )
});

class StudentList extends React.Component {
  state = {
    filterText: ''
  };

  handleChange = (e) => this.setState({ [e.target.id]: e.target.value });

  render() {
    const { students, onClick, children, buttonListItem, classes, hideFilterBox } = { onClick: () => { }, ...this.props };
    const { filterText } = this.state;
    const byFullName = () => (student) => student.fullName.toUpperCase().indexOf(filterText.toUpperCase()) >= 0;
    const toStudentListItem = ({ buttonListItem, children, onClick }) => (student, index) => <StudentListItem student={student} key={index} onClick={onClick} buttonListItem={buttonListItem}>{children}</StudentListItem>

    return hideFilterBox ?
      <>
        <List className={classes.list}>
          {students && students.filter(byFullName()).map(toStudentListItem({ buttonListItem, children, onClick }))}
        </List>
      </> :
      <>
        <List className={classes.list}>
          <TextField id='filterText' label='Search students...' value={this.state.filterText} onChange={this.handleChange} />
          {students && students.filter(byFullName()).map(toStudentListItem({ buttonListItem, children, onClick }))}
        </List>
      </>
      ;
  }
}

export default withStyles(styles)(StudentList);
