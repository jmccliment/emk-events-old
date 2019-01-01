import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div className="card z-depth-0 event-summary">
        <div className="card-context grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by Foo Barrington</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectSummary;

