import React from 'react';

import './styles.css';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';

function DashboardHeader ({ onClick }) {
    return(
        <div className='dashbord-header-container'>
            {
                <button className='dashbord-header-btn' onClick={onClick}>Novo Voluntario</button>
            }

            <div className='dashbord-header-right'>
                <img 
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img 
                    src={SettingsIcon}
                    alt='settings-icon'
                    className='dashbord-header-icon' />
            </div>
        </div>
    )
}

export default DashboardHeader;