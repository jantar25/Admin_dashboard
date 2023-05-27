import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import DashboardHeader from './components/DashboardHeader';

import './App.css';
import Clients from './pages/Clients';
import Sellers from './pages/Sellers';
import Dashboard from './pages/Dashboard/Dashboard';
import Account from './pages/Account/Account';
import Login from './pages/Login'
import { useState } from 'react';

function App () {
  const [toggleSidebar,setToggleSidebar] = useState(false)
  const admin = true

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }
  return(
    <Router>
      <Routes>
        {!admin ? 
        <Route exact path="/" element={<Login/>} /> :
        <Route exact path="*" element= {
          <div>
            <DashboardHeader handleSidebar={handleSidebar} isOpen={toggleSidebar}/>
            <div className='container'>
              <SideBar menu={sidebar_menu} isOpen={toggleSidebar} handleSidebar={handleSidebar}/>
              <div className='dashboard-body'>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route exact path="/clients" element={< Clients/>} />
                    <Route exact path="/sellers" element={<Sellers />} />
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