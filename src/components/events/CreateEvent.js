//*/
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class CreateEvent extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Create new event
          </Typography>
          <TextField label="Title" type="text" id="title" className={classes.textField} onChange={this.handleChange} />
          <TextField label="Event Content" multiline type="text" id="content" className={classes.textField} onChange={this.handleChange} />
          <Button color="primary" onClick={this.handleSubmit}>Create</Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(CreateEvent);
