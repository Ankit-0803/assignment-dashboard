import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import UserList from './components/Users/UserList';
import UserEdit from './components/Users/UserEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* User List Page */}
          <Route path="/users" element={<UserList />} />

          {/* Edit User Page */}
          <Route path="/users/edit/:id" element={<UserEdit />} />

          {/* Redirect to Login if no route matches */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;