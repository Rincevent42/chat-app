import React from 'react';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    }
  }
  render() { 
    return (
      <div className='Contact'>
        <img className='avatar' src={this.props.avatar} alt={this.props.name} />

        <div>
          <div className='name'>
            {this.props.name}
          </div>
          <div className='status'
            onClick={event => {
              const newStatus = !this.state.online;
              this.setState({online: newStatus});
            }}
          >
            <span className={this.state.online ? 'status-online' : 'status-offline'}/>
            <div className='status-text'>
              {(this.state.online) ? 'online' : 'offline'}
            </div>
          </div>
        </div>

      </div>
    );
  }
}
 
export default Contact;

