//*/
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

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

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => this.setState({
    [e.target.id]: e.target.value
  });

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Create new project
          </Typography>
          <TextField label="Title" type="text" id="title" className={classes.textField} onChange={this.handleChange} />
          <TextField label="Project Content" multiline type="text" id="content" className={classes.textField} onChange={this.handleChange} />
          <Button color="primary" onClick={this.handleSubmit}>Create</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(CreateProject));
