import React, { useContext, useState } from 'react'
import { UserContext } from '../../../UserContext'
import Customer_dashboard from '../Customer_dashboard/Customer_dashboard'
import './Customer_main.css'
import { Link, Routes, Route } from 'react-router-dom';
import Customer_explore from '../Customer_explore/Customer_explore';
import Customer_savelist from '../Customer_savelist/Customer_savelist';
import Customer_makepost from '../Customer_makepost/Customer_makepost';
import Customer_orderlist from '../Customer_orderlist/Customer_orderlist';
import Customer_directmessage from '../Customer_directmessage/Customer_directmessage';
import Customer_profile from '../Customer_profile/Customer_profile';

export default function Customer_main() {
  const { userData } = useContext(UserContext)
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'explore':
        return <Customer_explore />;
      case 'savelist':
        return <Customer_savelist />;
      case 'makepost':
        return <Customer_makepost />;
      case 'orderlist':
        return <Customer_orderlist />;
      case 'directmessage':
        return <Customer_directmessage />;
      case 'profile':
        return <Customer_profile />;
      default:
        return <Customer_dashboard />;
    }
  };

  return (
    <div>
      <div class="container-fluid  pb-2 nav1">

        <nav class="container navbar navbar-expand-sm   ">
          <div class="head me-4">
            <Link class="nav-link" onClick={() => handleTabChange('dashboard')}>
              Quickhandy
            </Link>
          </div>

          <div class="social-part mr-auto">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <button class=" ms-auto navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo03" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul class="navbar-nav ms-auto mt-2 mt-lg-0 ">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>


      <div class="container-fluid nav2">

        <nav class="container navbar navbar-expand-sm ">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto ">
              <li class="nav-item">
                <Link class="nav-link activate" onClick={() => handleTabChange('dashboard')}>
                  <i class="fa fa-home"></i> <a className='fatext'> Dashboard</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={() => handleTabChange('explore')}>
                  <i class="fa fa-search"></i><a className='fatext'> Explore</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={() => handleTabChange('savelist')}>
                  <i class="fa fa-heart"></i> <a className='fatext'> Saved </a>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={() => handleTabChange('makepost')}>
                  <i class="fa fa-plus-circle"></i> <a className='fatext'> Posts</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={() => handleTabChange('orderlist')}>
                  <i class="fa fa-list-ul"></i> <a className='fatext'> Orders</a>
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto  mt-lg-0">
              <li class=" nav-item">
                <Link class="nav-link" onClick={() => handleTabChange('directmessage')}>
                  <i class="fa fa-send"></i> <a className='fatext'> Messages</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" onClick={() => handleTabChange('profile')}>
                  <i class="fa fa-user"></i> <a className='fatext'> Profile</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className='container-fluid'>
        <div className="container">

          {renderComponent()}
        </div>
      </div>

    </div>

  )
}
