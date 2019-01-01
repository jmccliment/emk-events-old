import React from 'react'

export default function ProjectDetails(props) {
  const { id } = props.match.params;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iure perspiciatis nesciunt iusto voluptatibus nihil est nostrum nulla consequuntur, architecto laboriosam pariatur iste sit corporis animi sunt officia libero eligendi!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Foo Barrington</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}
