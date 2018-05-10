import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PostFormContainer from '../post_form/post_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.logout = this.props.logout.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen:true});
  }

  closeModal() {
    this.setState({modalIsOpen:false});
  }

  logout() {
    return (e) => {
      e.preventDefault();
      this.props.logout();
    };
  }

  render() {
    return (
      <div className='greeting-container-wrapper'>
      <header className='header'>
        <div className='header-home-link'><Link to='/posts'><i className="fas fa-camera-retro"></i><div className='header-title'>Kodak Moment</div></Link></div>
        <button onClick={this.openModal} className='upload-button'><i className="fas fa-upload"></i>Upload</button>
        <div className='nav-links'>
          <div><i className="far fa-compass"></i></div>
          <div><i className="far fa-user"></i></div>
          <div><i className="fas fa-sign-out-alt" onClick={this.props.logout}></i></div>
        </div>
      </header>
      <Modal
        isOpen={this.state.modalIsOpen}
        onClose={this.closeModal}
        style={customStyles}
        >
        <div className='modal-close'><i className="fas fa-times" onClick={this.closeModal}></i></div>
        <PostFormContainer />
      </Modal>
      </div>
    );
  }
}
