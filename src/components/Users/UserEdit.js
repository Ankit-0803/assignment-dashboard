import React, { useState } from 'react';
import API from '../utils/api';

const UserEdit = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/api/users/${user.id}`, formData);
      alert('User updated successfully');
      onClose();
    } catch (err) {
      alert('Failed to update user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:</label>
      <input 
        value={formData.first_name} 
        onChange={(e) => setFormData({ ...formData, first_name: e.target.value })} 
      />
      <label>Last Name:</label>
      <input 
        value={formData.last_name} 
        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })} 
      />
      <label>Email:</label>
      <input 
        value={formData.email} 
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UserEdit;
