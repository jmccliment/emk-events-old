import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if(project && project.title && project.content) {

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{project && project.createdAt && project.createdAt.toString && project.createdAt.toString()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => { 
  const { id } = ownProps.match.params;
  const { projects } = state.firestore.data;
  const project = projects ? projects[id] : {};
  return {
    auth: state.firebase.auth,
    project 
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);