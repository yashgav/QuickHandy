import React from 'react';
import './Customer_dashboard.css';
import Worker_post from './Worker_posts/Worker_post';

export default function Customer_dashboard() {
  return (
    <div className='customer-dashboard-container'>Customer_dashboard
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 col-sm-12 order-sm-2">
            <div className="bg-primary text-white p-3">Filters</div>

          </div>
          <div className="col-md-9 col-sm-12 order-sm-1">
            <div className="bg-secondary text-white p-3">Workers Posts</div>
            <Worker_post />
          </div>
        </div>
      </div>
    </div>
  );
}
