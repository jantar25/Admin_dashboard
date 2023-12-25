import React, {useEffect, useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { userLogout } from '../../Redux/apiCalls';
import SideBarItem from './sidebar-item';
import './styles.css';
import LogoutIcon from '../../assets/icons/logout.svg';

function SideBar ({ menu,isOpen,handleSidebar }) {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigateUrl = useNavigate()
    const [active, setActive] = useState(1)
    const {currentUser} = useSelector(state => state.currentUser)

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [menu,location.pathname])

    const navigate = (id) => {
        setActive(id);
        handleSidebar()
    }

    const logOut = () => {
        userLogout(dispatch)
        navigateUrl('/login')
    }

    return(
        <nav className={`sidebar ${isOpen? 'active' : ''}`}>
            <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => {
                            const shouldDisplayItem =
                            item.alwaysDisplay ||
                            (currentUser?.isAdmin && item.adminOnly) ||
                            (!currentUser?.isAdmin && !item.adminOnly)

                            return (
                                shouldDisplayItem && (
                                    <div key={index} onClick={() => navigate(item.id)}>
                                        <SideBarItem
                                            active={item.id === active}
                                            item={item} />
                                    </div>
                                )
                            );
                        })}
                    </div>

                    <div className='sidebar-footer' onClick={logOut}>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
        </nav>
    )
}

export default SideBar;