import React from 'react';
import './Contact.css';

/*
const name = 'Harper Rice';
const avatar = 'https://randomuser.me/api/portraits/women/83.jpg';
const online = true;
*/

const Contact = (props) => (
  <div className='Contact'>
    <img className='avatar' src={props.avatar} alt={props.name} />

    <div>
      <div className='name'>
        {props.name}
      </div>
      <div className='status'>
        <span className={props.online ? 'status-online' : 'status-offline'} />
        <div className='status-text'>
          {(props.online) ? 'online' : 'offline'}
        </div>
      </div>
    </div>

  </div>
);

export default Contact;
