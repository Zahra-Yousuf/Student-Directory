import { useState } from 'react';

function StudentCard(props) {

  const [views, setViews] = useState(0);

  
  const [showDetails, setShowDetails] = useState(false);

 
  const [deleted, setDeleted] = useState(false);


  if (deleted) {
    return null;
  }

 
  function handleDelete() {
    setDeleted(true);
    props.onDelete();
  }

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="avatar-box">
        <svg width="70" height="70" viewBox="0 0 70 70">
          <circle cx="35" cy="24" r="14" fill="#8b8b8b" />
          <path d="M5 70c0-20 13-28 30-28s30 8 30 28z" fill="#8b8b8b" />
        </svg>
      </div>

      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>

        <p className="card-text small">
          ID: {props.id}<br />
          Major: {props.major}<br />
          Year: {props.year}<br />
          GPA: {props.gpa}
        </p>

        
        {showDetails && (
          <div className="border-top pt-2 mb-3 small">
            Email: {props.email}<br />
            Profile views: {views}
          </div>
        )}

        <div className="d-flex flex-wrap gap-1">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setViews(views + 1)}
          >
            View Profile ({views})
          </button>

          <button
            className="btn btn-outline-danger btn-sm"
            onClick={handleDelete}
          >
            Delete
          </button>

          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;
