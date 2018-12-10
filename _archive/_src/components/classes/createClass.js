import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import * as actions from '../../actions';

class CreateClass extends Component {
  state = {
    name: '',
    minAge: '',
    maxAge: ''
  };

  handleNameChage = event => {
    this.setState({ name: event.target.value });
  }

  handleMinAgeChange = event => {
    this.setState({ minAge: event.target.value });
  }

  handleMaxAgeChange = event => { 
    this.setState({ maxAge: event.target.value });
  }

  handleFormSubmit = event => {
    const { name, minAge, maxAge } = this.state;
    const { addClass } = this.props;
    event.preventDefault();
    addClass({ name, minAge, maxAge });
    this.setState({ name: '', minAge: '', maxAge: '' });
  }

  render() {
    // const { name, minAge, maxAge } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField id="name" label="Class Name" onChange={this.handleNameChage} />
        <TextField id="minAge" label="Minimum Age" onChange={this.handleMinAgeChange} />
        <TextField id="maxAge" label="Maximum Age" onChange={this.handleMaxAgeChange} />
        <div><input type="submit" value="Submit"></input></div>
      </form>
    );
  }
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, actions)(CreateClass);