import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

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
import Seller from './pages/Seller/Seller';


function App () {
  const [toggleSidebar,setToggleSidebar] = useState(false)
  const {currentUser} = useSelector(state => state.currentUser)

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
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
                    <Route path="/" element={currentUser? <Dashboard/> : <Navigate to="/login" />} />
                    <Route exact path="/clients" element={currentUser? <Clients/> : <Navigate to="/login" />} />
                    <Route exact path="/sellers" element={currentUser? <Sellers/> : <Navigate to="/login" />} />
                    <Route exact path="/seller/:id" element={currentUser? <Seller/> : <Navigate to="/login" />} />
                    <Route exact path="/profile" element={currentUser? <Account/> : <Navigate to="/login" />} />
                    <Route exact path="/users" element={currentUser? <Users/> : <Navigate to="/login" />} />
                  </Routes>
              </div>
            </div>
          </div>
        } /> 
        <Route exact path="/login" element={!currentUser? <Login /> : <Navigate to="/" />} /> 
      </Routes>
    </Router>
  )
}

export default App;