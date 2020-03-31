import React from 'react';
import './Contact.css';

const name = 'Harper Rice';
const avatar = 'https://randomuser.me/api/portraits/women/83.jpg';
const online = true;

const Contact = () => (
  <div className='Contact'>
    <img className='avatar' src={avatar} alt={name} />

    <div>
      <div className='name'>
        {name}
      </div>
      <div className='status'>
        <span className='status-online'></span>
        <div className='status-text'>
          {(online) ? 'online' : 'offline'}
        </div>
      </div>
    </div>

  </div>
);

export default Contact;
