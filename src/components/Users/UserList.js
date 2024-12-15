import React, { useEffect, useState } from 'react';
import apiClient, { getUsers } from '../utils/api'; // Import the API client and functions
import UserCard from './UserCard';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await getUsers(page); // Use the getUsers API function
        setUsers(response);
        setFilteredUsers(response);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
    else fetchUsers();
  }, [page, navigate]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query) ||
        user.last_name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name or email"
        value={search}
        onChange={handleSearch}
      />
      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <div className="row">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <p>No users found.</p>
          )}
        </div>
      )}
      <div className="d-flex justify-content-between mt-3">
        <button
          disabled={page === 1 || loading}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          Previous
        </button>
        <button
          disabled={users.length === 0 || loading}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
