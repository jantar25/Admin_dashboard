import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import DashboardHeader from './components/DashboardHeader';

import './App.css';
import Clients from './pages/Clients';
import Sellers from './pages/Sellers';
import Users from './pages/Users'
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account/Account';
import Login from './pages/Login/Login'
import { useState } from 'react';

function App () {
  const [toggleSidebar,setToggleSidebar] = useState(false)
  const [admin,setAdmin] = useState(false)

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }

  const allowAdmin = () => {
    setAdmin(!admin)
  }

  return(
    <Router>
      <Routes>
        <Route exact path="*" element= {
          <div className='app'>
            <DashboardHeader handleSidebar={handleSidebar} isOpen={toggleSidebar}/>
            <div className='container'>
              <SideBar menu={sidebar_menu} isOpen={toggleSidebar} handleSidebar={handleSidebar}/>
              <div className='dashboard-body'>
                  <Routes>
                    <Route path="/" element={admin? <Dashboard/> : <Navigate to="/login" />} />
                    <Route exact path="/clients" element={admin? <Clients/> : <Navigate to="/login" />} />
                    <Route exact path="/sellers" element={admin? <Sellers/> : <Navigate to="/login" />} />
                    <Route exact path="/profile" element={admin? <Account/> : <Navigate to="/login" />} />
                    <Route exact path="/users" element={admin? <Users/> : <Navigate to="/login" />} />
                  </Routes>
              </div>
            </div>
          </div>
        } /> 
        <Route exact path="/login" element={!admin? <Login allowAdmin={allowAdmin} /> : <Navigate to="/" />} /> 
      </Routes>
    </Router>
  )
}

export default App;