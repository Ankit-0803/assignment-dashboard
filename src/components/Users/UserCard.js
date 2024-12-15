import React from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';

const UserCard = ({ user, onDelete }) => {
  const handleDelete = async () => {
    try {
      await API.delete(`/api/users/${user.id}`);
      alert('User deleted successfully');
      if (onDelete) onDelete(user.id); // Callback to update parent state
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">
            {user.first_name} {user.last_name}
          </h5>
          <p>{user.email}</p>
          <div className="d-flex justify-content-between">
            <Link to={`/users/edit/${user.id}`} className="btn btn-primary">
              Edit
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
