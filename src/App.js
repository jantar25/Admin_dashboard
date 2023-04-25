import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import DashboardHeader from './components/DashboardHeader';

import './App.css';
import Orders from './pages/Orders';
import Repport from './pages/Repport/Repport';
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account/Account';
import Login from './pages/Login'

function App () {
  const admin = true
  return(
    <Router>
      <Routes>
        {!admin ? 
        <Route exact path="/" element={<Login/>} /> :
        <Route exact path="*" element= {
          <div>
            <DashboardHeader />
            <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />
            <div className='dashboard-body'>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route exact path="/clients" element={< Orders/>} />
                  <Route exact path="/rapport" element={<Repport />} />
                  <Route exact path="/profile" element={<Account />} />
                </Routes>
            </div>
            </div>
          </div>
        } />
        }
      </Routes>
    </Router>
  )
}

export default App;