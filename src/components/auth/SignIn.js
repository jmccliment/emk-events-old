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

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
            Sign In
          </Typography>
          <TextField label="Email" type="email" id="email" className={classes.textField} onChange={this.handleChange} />
          <TextField label="Password" type="password" id="password" className={classes.textField} onChange={this.handleChange} />
          <Button color="primary" onClick={this.handleSubmit}>Login</Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(SignIn);

//*/

/*/
import React, { Component } from 'react'

class SignIn extends Component {
  state = {

  }

  handleChange = (e) => console.log(`changed`, e);
  handleSubmit = (e) => console.log(`submitted`, e);

  render() {
    return (
      <div className="container">
        <form className="white" onsubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field"><button className="btn pink lighten-z z-depth-0">Login</button></div>
        </form>
      </div>
    )
  }
}

export default SignIn
//*/