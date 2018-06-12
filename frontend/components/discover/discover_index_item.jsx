import React from 'react';
import Modal from 'react-modal';
import ProfilePostShowContainer from '../profile_post_show/profile_post_show_container';

export default class DiscoverIndexItem extends React.Component {
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

  openModal(){
    this.setState({modalIsOpen:true});
  }

  closeModal(){
    this.setState({modalIsOpen:false});
  }

  render() {
    const {post} = this.props;
    return (
      <div className='discover-index-wrapper'>
        <div className='discover-index-hover' onClick={this.openModal}>
          <h2 className='numlikes'><i className="fas fa-heart "></i> {post.likes}</h2>
          <h2 className='numcomments'><i className="fas fa-comment"></i> {post.comments.length}</h2>
        </div>
        <li className='discover-index-item'>
          <img src={post.img_url} className='discover-img'/>
        </li>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className='discover-index-modal'
          overlayClassName='discover-index-overlay'>
          <div className='discover-modal-close'><i className="fas fa-times" onClick={this.closeModal}></i></div>
          <ProfilePostShowContainer
            post={post}
            comments={post.comments} />
        </Modal>
      </div>
    );
  }
}
