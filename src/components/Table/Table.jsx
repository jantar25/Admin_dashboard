import React from 'react'
import { Link } from 'react-router-dom';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import Info from '../../assets/icons/info.svg'
import './table.css'

const Table = ({head,body,resetUserPassword,activateUser,deactivateUser}) => {
    const handleActionChange = (e, userId) => {
        const selectedAction = e.target.value;
    
        switch (selectedAction) {
          case 'resetPassword':
            resetUserPassword(userId);
            break;
          case 'activateUser':
            activateUser(userId);
            break;
          case 'deactivateUser':
            deactivateUser(userId);
            break;
          default:
            break;
        }
        e.target.value = '';
      };

  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    {head.map((h,index) => head.indexOf(h) !== 0? <th key={index}>{h}</th> : null)}
                </tr>
            </thead>
            {body.length !== 0 ?
            <tbody>{body.map((seller, index) => (
                <tr key={index}>
                    {seller.map((item,index) => 
                        seller.indexOf(item) !== 0?
                        <td data-label={head[index]} key={index}>{item === 'active' || item === 'inactive'?
                            <div className='status-container'>
                                {item === 'active' ?
                                    <img
                                        src={DoneIcon}
                                        alt='paid-icon'
                                        className='dashboard-content-icon' />
                                    : <img
                                        src={CancelIcon}
                                        alt='canceled-icon'
                                        className='dashboard-content-icon' />}
                                <span>{item}</span>
                            </div>
                        : <span>{item}</span>}
                        </td> : null
                    )}
                    {head.includes("PLUS D'INFOS") && 
                    <td>
                        <Link to={`/merchand/${seller[0]}`} style={{textDecoration:'none'}} className='moreInfo'>
                            <img
                                src={Info}
                                alt='Info-icon' 
                                className='menu-list' />
                            <span>Info</span>
                        </Link>
                    </td> }
                    {head.includes("ACTION") && 
                    <td>
                        <div>
                            <select onChange={(e) => handleActionChange(e, seller[0])}>
                                <option value="">--Choisir l'action--</option>
                                <option value="resetPassword">Réinitialiser Password</option>
                                <option value="activateUser">Activer</option>
                                <option value="deactivateUser">Désactivé</option>
                            </select>
                        </div>
                    </td> }
                </tr>
                ))}
            </tbody>
            : null}
        </table>
    </div>
  )
}

export default Table