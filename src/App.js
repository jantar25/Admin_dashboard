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
import Transactions from './pages/Transactions/Transactions';
import Liquidations from './pages/Liquidations/Liquidations';
import ClientTransaction from './pages/ClientTransaction/ClientTransaction';
import ClientLiquidation from './pages/ClientLiquidation/ClientLiquidation';


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
                    <Route exact path="/profile" element={currentUser? <Account/> : <Navigate to="/login" />} />
                    <Route exact path="/transaction" element={!currentUser?.isAdmin? <ClientTransaction /> : <Navigate to="/login" />} />
                    <Route exact path="/liquidation" element={!currentUser?.isAdmin? <ClientLiquidation/> : <Navigate to="/login" />} />
                    <Route exact path="/clients" element={currentUser?.isAdmin? <Clients/> : <Navigate to="/login" />} />
                    <Route exact path="/merchands" element={currentUser?.isAdmin? <Sellers/> : <Navigate to="/login" />} />
                    <Route exact path="/merchand/:id" element={currentUser?.isAdmin? <Seller/> : <Navigate to="/login" />} />
                    <Route exact path="/transactions" element={currentUser?.isAdmin? <Transactions/> : <Navigate to="/login" />} />
                    <Route exact path="/liquidations" element={currentUser?.isAdmin? <Liquidations/> : <Navigate to="/login" />} />
                    <Route exact path="/users" element={currentUser?.isAdmin? <Users/> : <Navigate to="/login" />} />
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