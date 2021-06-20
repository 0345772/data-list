import React from 'react';
import { useSelector } from 'react-redux';

import './style.css';

export const Profile = () => {

  const { profile } = useSelector((state) => state.profile);

  const profileName = !!profile && profile.name && profile.name.length > 0 ? profile.name : <span>Введите имя:</span>;

  const profileLastName = !!profile && profile.lastName && profile.lastName.length > 0 ? profile.lastName : <span>Введите фамилию:</span>;

  const profilePhone = !!profile && profile.phone  && profile.phone.length > 0 ? profile.phone : <span>Введите № телефона:</span>

  return (
    <div className="profile" >     
        {!!profile ? 
          <div>
            <span>name: <h6>{profileName}</h6>  </span>
            <span>lastName: <h6>{profileLastName}</h6></span>
            <span>phone: <h7>{profilePhone}</h7></span>
          </div> : 
          <h9>Данных нет...</h9>}      
    </div>
  )
}