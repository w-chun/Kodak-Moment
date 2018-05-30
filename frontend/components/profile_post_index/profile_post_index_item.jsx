import React from 'react';
import Modal from 'react-modal';

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

export default class ProfilePostIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    const { post } = this.props;
    return (
      <div className='profile-post-wrapper'>
        <a onClick={this.openModal}><img src={post.img_url} className='profile-post-index-image'></img></a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onClose={this.closeModal}
          style={customStyles}
          >
        <div className='modal-close'><i className="fas fa-times" onClick={this.closeModal}></i></div>
        </Modal>
      </div>
    );
  }
}
