import React from 'react';
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import './styles.css';
import SettingsIcon from '../../assets/icons/settings.svg';
import NotificationIcon from '../../assets/icons/notification.svg';
import logo from '../../assets/images/logo.png';

function DashboardHeader ({handleSidebar,isOpen}) {
    return(
        <div className='dashbord-header-container'>
            <div className='dashbord-header-left'>
                <div className="menu-container" onClick={handleSidebar}>
                    {!isOpen? <FiMenu />: <AiOutlineClose />}
                </div>
                <img src={logo} alt="logo" />
            </div>
            <div className='dashbord-header-right'>
                <img 
                    src={NotificationIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
                <img 
                    src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
                <img
                    className='dashbord-header-avatar'
                    src='https://reqres.in/img/faces/9-image.jpg' 
                    alt='user-avatar'/>
                <div className='dashbord-header-title'>
                    <h6>Glody</h6>
                    <span>Administrateur</span>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;