import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
      <div>
        <p>Home</p>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    )
  };

export default home;
